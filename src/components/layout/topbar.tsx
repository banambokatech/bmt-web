// src/components/layout/Topbar.tsx

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
      {/* Search */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search missions..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="ml-6 flex items-center gap-6">
        {/* Notifications */}
        <button className="text-xl text-slate-300 hover:text-white">
          🔔
        </button>

        {/* XP */}
        <div className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
          1450 XP
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-slate-950">
            C
          </div>

          <div className="hidden text-sm md:block">
            <p className="font-semibold text-white">
              Christian
            </p>
            <p className="text-slate-400">
              Innovator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
