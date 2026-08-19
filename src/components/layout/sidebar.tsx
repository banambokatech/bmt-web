export function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-bold text-yellow-400">
        BMT
      </h2>

      <nav className="mt-8 space-y-2">
        <div>🏠 Dashboard</div>
        <div>🎯 Missions</div>
        <div>🌳 Mission Tree</div>
        <div>🤝 Team Missions</div>
        <div>🏆 Leaderboard</div>
        <div>👥 Community</div>
        <div>🎓 Tracks</div>
      </nav>
    </aside>
  );
}
