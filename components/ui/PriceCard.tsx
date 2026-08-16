"use client";

import { useEffect, useMemo, useState } from "react";
import { type Plan } from "@/lib/content";
import { STORE_URLS } from "@/lib/site";
import { auth, onAuthStateChanged, signOutBluai } from "@/lib/firebase";
import { startBluaiCheckout } from "@/lib/bluaiCheckout";
import GlassCard from "./GlassCard";
import CharReveal from "@/components/fx/CharReveal";

type BillingCycle = "monthly" | "annual";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.18" />
      <path
        d="M7 12.5l3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Radio({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
        active ? "border-white/70" : "border-white/30"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full transition-colors ${
          active ? "bg-accent-purple" : "bg-white/45"
        }`}
      />
    </span>
  );
}

function PriceOption({
  active,
  price,
  note,
  badge,
  onClick,
}: {
  active: boolean;
  price: string;
  note: string;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-xl px-3 py-2.5 text-left ring-1 transition ${
        active
          ? "bg-gradient-to-br from-[#3d59f2] via-[#1a2d7d] to-[#0a1130] ring-white/25"
          : "bg-gradient-to-br from-[#25367f] via-[#17245d] to-[#0a1130] ring-white/10"
      }`}
      aria-pressed={active}
    >
      {badge ? (
        <span className="absolute -top-2 left-2 rounded-full bg-accent-purple px-1.5 py-0.5 text-[8px] font-bold text-white">
          {badge}
        </span>
      ) : null}
      <Radio active={active} />
      <p className="text-sm font-bold text-white">{price}</p>
      <p className="text-[10px] text-white/60">{note}</p>
    </button>
  );
}

export default function PriceCard({ plan }: { plan: Plan }) {
  const hasBillingOptions = Boolean(plan.altPrice);
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signedEmail, setSignedEmail] = useState<string | null>(auth.currentUser?.email ?? null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSignedEmail(user?.email ?? null);
    });
    return () => unsubscribe();
  }, []);

  const helper = useMemo(() => {
    const name = plan.name.toLowerCase();

    if (name.includes("safe")) {
      return billing === "annual"
        ? "Paga aquí y la membresía anual quedará ligada al correo con el que inicies sesión."
        : "Paga aquí y la membresía mensual quedará ligada al correo con el que inicies sesión.";
    }

    if (name.includes("guard")) {
      return "Este plan puede cotizarse o cobrarse después con el mismo flujo autenticado.";
    }

    if (name.includes("edu")) {
      return "Este plan sigue siendo por contacto para escuelas e instituciones.";
    }

    return "Puedes descargar la app o usar el plan gratuito.";
  }, [billing, plan.name]);

  const handleCheckout = async () => {
    setError(null);

    const name = plan.name.toLowerCase();
    if (name.includes("safe")) {
      setLoading(true);
      try {
        await startBluaiCheckout({
          planSlug: "safe",
          billingPeriod: billing,
          provider: "stripe",
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "No se pudo iniciar el pago.");
        setLoading(false);
      }
      return;
    }

    if (name.includes("guard")) {
      window.location.href = "#contacto";
      return;
    }

    if (name.includes("edu")) {
      window.location.href = "#contacto";
      return;
    }

    window.open(STORE_URLS.android === "#" ? "/descarga" : STORE_URLS.android, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="price-glow relative flex-1 transition-transform duration-300 hover:-translate-y-2">
        <GlassCard className="flex h-full flex-col p-6">
          <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-white/60">Incluye:</p>
          <ul className="mb-5 mt-2 space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex min-w-0 gap-2 text-[12px] leading-snug text-white/85">
                <Check />
                <CharReveal as="span" text={feature} stagger={0.008} className="min-w-0 break-words" />
              </li>
            ))}
          </ul>

          {hasBillingOptions && plan.altPrice ? (
            <div className="mt-auto grid grid-cols-2 gap-2.5 text-left">
              <PriceOption
                active={billing === "monthly"}
                price={plan.price}
                note={plan.monthlyLabel || plan.priceNote}
                onClick={() => setBilling("monthly")}
              />
              <PriceOption
                active={billing === "annual"}
                price={plan.altPrice}
                note={plan.annualLabel || plan.altNote || ""}
                badge={plan.altBadge}
                onClick={() => setBilling("annual")}
              />
            </div>
          ) : (
            <div className="mt-auto rounded-xl bg-gradient-to-br from-[#2a3da0] via-[#16235e] to-[#0a1130] px-3 py-2.5 ring-1 ring-white/10">
              <p className="text-sm font-bold text-white">{plan.price}</p>
              <p className="text-[10px] text-white/55">{plan.priceNote}</p>
            </div>
          )}

          <p className="mt-3 text-[11px] leading-relaxed text-white/55">{helper}</p>

          {signedEmail ? (
            <div className="mt-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[11px] text-cyan-100">
              <p className="font-semibold">Cuenta vinculada</p>
              <p>{signedEmail}</p>
              <button
                type="button"
                onClick={() => void signOutBluai()}
                className="mt-2 text-white/80 underline underline-offset-2"
              >
                Cambiar cuenta
              </button>
            </div>
          ) : null}

          {error ? <p className="mt-3 text-[11px] text-red-200">{error}</p> : null}
        </GlassCard>
      </div>

      <button
        type="button"
        onClick={() => void handleCheckout()}
        disabled={loading}
        className="cta-live block rounded-full bg-gradient-to-r from-brand via-brand-indigo to-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand/30 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Conectando pago..." : plan.cta}
      </button>
    </div>
  );
}
