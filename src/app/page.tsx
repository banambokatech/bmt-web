import AppShell from "@/components/layout/AppShell";
import MissionTree from "@/components/mission/MissionTree";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600 to-slate-900 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-5xl font-black">
                Welcome Back, Christian 👋
              </h1>

              <p className="mt-3 text-slate-200">
                Former la prochaine génération d'innovateurs africains
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Rank" value="Innovator" />
              <StatCard title="XP" value="1450" />
              <StatCard title="Level" value="05" />
              <StatCard title="Progress" value="42%" />
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-3">
          <section className="xl:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">
              Mission Tree
            </h2>

            <p className="mt-2 text-slate-400">
              Explore your learning journey
            </p>

            <div className="mt-6">
              <MissionTree />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Current Mission
              </h2>

              <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                ACTIVE
              </span>
            </div>

            <h3 className="mt-8 text-3xl font-black text-blue-400">
              mb_strlen()
            </h3>

            <p className="mt-3 text-slate-400">
              Build your own implementation of strlen().
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow title="Reward" value="+75 XP" />
              <InfoRow title="Difficulty" value="★★☆☆☆" />
              <InfoRow title="Estimated Time" value="2 Hours" />
            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-bold hover:bg-blue-500">
              Continue Mission
            </button>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-sm text-slate-300">
        {title}
      </p>

      <p className="mt-1 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}

function InfoRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-slate-500">
        {title}
      </p>

      <p>{value}</p>
    </div>
  );
}

