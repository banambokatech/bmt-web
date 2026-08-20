export default function Sidebar() {
  const menuItems = [
    { icon: "🏠", label: "Dashboard" },
    { icon: "🎯", label: "Missions" },
    { icon: "🌳", label: "Mission Tree" },
    { icon: "🤝", label: "Team Missions" },
    { icon: "🏆", label: "Leaderboard" },
    { icon: "👥", label: "Community" },
    { icon: "🎓", label: "Tracks" },
    { icon: "📅", label: "Events" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-black text-yellow-400">
          BMT
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Mission Control
        </p>
      </div>

      <div className="p-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Current Rank
          </p>

          <h2 className="mt-2 text-xl font-bold text-blue-400">
            Innovator
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Level 05
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                item.label === "Dashboard"
                  ? "bg-blue-500/15 text-blue-400"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-black">
          <p className="text-xs font-bold uppercase">
            Next Goal
          </p>

          <h3 className="mt-1 font-black">
            Complete libmb
          </h3>

          <p className="mt-1 text-sm">
            Unlock Algorithms Track
          </p>
        </div>
      </div>
    </aside>
  );
}
