import AppShell from "@/components/layout/AppShell";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Hero Card */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 p-8 shadow-xl">
          <h1 className="text-5xl font-black text-white">
            Welcome Back, Christian 👋
          </h1>

          <p className="mt-4 text-blue-100">
            Current Mission: mb_strlen()
          </p>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm text-blue-100">
              <span>Progress</span>
              <span>42%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-blue-950">
              <div className="h-3 w-[42%] rounded-full bg-yellow-400"></div>
            </div>
          </div>

          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-sm text-blue-200">Rank</p>
              <p className="font-bold">Innovator</p>
            </div>

            <div>
              <p className="text-sm text-blue-200">XP</p>
              <p className="font-bold">1450</p>
            </div>

            <div>
              <p className="text-sm text-blue-200">Level</p>
              <p className="font-bold">05</p>
            </div>
          </div>

          <button className="mt-8 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-slate-950 hover:bg-yellow-300">
            Continue Mission
          </button>
        </section>

        {/* Statistics */}
        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">
              1450
            </h3>
            <p className="text-slate-400">XP</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-green-400">
              14
            </h3>
            <p className="text-slate-400">
              Missions Completed
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-yellow-400">
              #3
            </h3>
            <p className="text-slate-400">
              Leaderboard Rank
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-red-400">
              4
            </h3>
            <p className="text-slate-400">
              Badges Earned
            </p>
          </div>
        </section>

        {/* Two Columns */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Mission Progress */}
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Mission Progress
            </h2>

            <div className="space-y-3">
              <div>✅ Shell</div>
              <div>✅ Git</div>
              <div>✅ C</div>
              <div>🟡 libmb</div>
              <div>🔒 Algorithms</div>
              <div>🔒 Systems</div>
            </div>
          </div>

          {/* Next Goal */}
          <div className="rounded-2xl border border-yellow-400 bg-slate-900 p-6">
            <h2 className="mb-2 text-sm font-bold uppercase text-yellow-400">
              Next Milestone
            </h2>

            <h3 className="text-3xl font-black">
              Complete libmb
            </h3>

            <p className="mt-3 text-slate-400">
              Unlock Algorithms Track
            </p>

            <p className="mt-4 text-yellow-400">
              Reward: +500 XP
            </p>

            <button className="mt-6 rounded-xl bg-yellow-400 px-4 py-2 font-bold text-slate-950">
              Continue
            </button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
