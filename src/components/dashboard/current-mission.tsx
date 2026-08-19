export function CurrentMission() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Current Mission
        </h2>

        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
          ACTIVE
        </span>
      </div>

      <h3 className="mt-6 text-3xl font-black text-blue-400">
        mb_strlen()
      </h3>

      <p className="mt-2 text-slate-400">
        Build your own implementation of strlen.
      </p>

      <div className="mt-6 space-y-3">
        <div>
          <span className="text-slate-400">Reward</span>
          <p>+75 XP</p>
        </div>

        <div>
          <span className="text-slate-400">Difficulty</span>
          <p>★★☆☆☆</p>
        </div>

        <div>
          <span className="text-slate-400">Estimated Time</span>
          <p>2 Hours</p>
        </div>
      </div>

      <button className="mt-6 rounded-xl bg-blue-500 px-6 py-3 font-bold">
        Continue Mission
      </button>
    </section>
  );
}
