const fallback = "#";

export const STORE_URLS = {
  ios: process.env.NEXT_PUBLIC_APPLE_STORE_URL || fallback,
  android: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || fallback,
};

export const PAYMENT_URLS = {
  bluaiSafeMonthly: process.env.NEXT_PUBLIC_BLUAI_SAFE_MONTHLY_URL || fallback,
  bluaiSafeAnnual: process.env.NEXT_PUBLIC_BLUAI_SAFE_ANNUAL_URL || fallback,
};

export const HAS_REAL_PAYMENT_LINKS =
  PAYMENT_URLS.bluaiSafeMonthly !== fallback || PAYMENT_URLS.bluaiSafeAnnual !== fallback;
