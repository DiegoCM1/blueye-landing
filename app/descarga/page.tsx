import AppBadges from "@/components/ui/AppBadges";

export default function DescargaPage() {
  return (
    <main className="min-h-screen bg-navy-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/15 bg-white/8 p-10 text-center shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-cyan">
          Bluai
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Descarga la app para continuar</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          El alta de la membresía se realiza dentro de la aplicación, desde tu teléfono. Descarga
          Bluai, abre la app y ahí podrás elegir y pagar tu plan.
        </p>

        <div className="mt-10 flex justify-center">
          <AppBadges className="justify-center" />
        </div>

        <p className="mt-8 text-sm text-white/60">
          Después de instalarla, crea tu cuenta o inicia sesión y completa la suscripción desde la
          sección de membresías.
        </p>
      </div>
    </main>
  );
}
