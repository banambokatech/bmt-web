export function DashboardHero() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600 to-slate-900 p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-blue-200">
            Mission Control
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Welcome Back, Christian 👋
          </h1>

          <p className="mt-3 text-slate-200">
            Former la prochaine génération d'innovateurs africains
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm text-slate-300">Rank</p>
            <p className="text-xl font-bold text-yellow-400">
              Innovator
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm text-slate-300">XP</p>
            <p className="text-xl font-bold">
              1450
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm text-slate-300">Level</p>
            <p className="text-xl font-bold">
              05
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 p-4">
            <p className="text-sm text-slate-300">Progress</p>
            <p className="text-xl font-bold">
              42%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
