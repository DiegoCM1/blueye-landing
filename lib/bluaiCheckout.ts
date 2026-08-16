import { auth, signInWithBluaiGoogle, type User } from "@/lib/firebase";

export type CheckoutPlan = "safe" | "guard";
export type CheckoutBilling = "monthly" | "annual";
export type CheckoutProvider = "auto" | "stripe" | "mercadopago";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BLUAI_API_URL || "https://backend-blueye-staging.up.railway.app";

async function getIdTokenOrThrow(user: User) {
  return user.getIdToken();
}

async function authorizedFetch(user: User, url: string, init: RequestInit = {}) {
  const token = await getIdTokenOrThrow(user);
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${token}`);

  return fetch(url, { ...init, headers });
}

export async function ensureBluaiUser() {
  const user = auth.currentUser ?? (await signInWithBluaiGoogle());

  const upsert = await authorizedFetch(user, `${API_BASE_URL}/api/v1/users/me`, {
    method: "POST",
  });

  if (!upsert.ok && upsert.status !== 201 && upsert.status !== 200) {
    throw new Error("No se pudo vincular tu cuenta con Bluai.");
  }

  return user;
}

export async function startBluaiCheckout({
  planSlug,
  billingPeriod,
  provider = "auto",
}: {
  planSlug: CheckoutPlan;
  billingPeriod: CheckoutBilling;
  provider?: CheckoutProvider;
}) {
  const user = await ensureBluaiUser();
  const response = await authorizedFetch(user, `${API_BASE_URL}/api/v1/payments/checkout`, {
    method: "POST",
    body: JSON.stringify({
      plan_slug: planSlug,
      billing_period: billingPeriod,
      provider,
    }),
  });

  const data = (await response.json().catch(() => null)) as { checkout_url?: string; detail?: string } | null;

  if (!response.ok || !data?.checkout_url) {
    throw new Error(data?.detail || "No se pudo iniciar el checkout.");
  }

  window.location.href = data.checkout_url;
}
