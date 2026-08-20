const missions = [
  { name: "Shell", status: "completed" },
  { name: "Git", status: "completed" },
  { name: "C", status: "completed" },
  { name: "mb_putchar", status: "completed" },
  { name: "mb_putstr", status: "completed" },
  { name: "mb_strlen", status: "current" },
  { name: "mb_putnbr", status: "locked" },
  { name: "libmb", status: "locked" },
];

export default function MissionTree() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-6">
        {missions.map((mission, index) => (
          <div key={mission.name} className="relative">
            <div
              className={`flex items-center gap-4 rounded-2xl border p-4 transition-all
              ${
                mission.status === "completed"
                  ? "border-blue-500 bg-blue-500/10"
                  : mission.status === "current"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-slate-700 bg-slate-800"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full font-bold
                ${
                  mission.status === "completed"
                    ? "bg-blue-500"
                    : mission.status === "current"
                    ? "bg-yellow-400 text-black"
                    : "bg-slate-700"
                }`}
              >
                {mission.status === "completed"
                  ? "✓"
                  : mission.status === "current"
                  ? "!"
                  : "🔒"}
              </div>

              <div>
                <h3 className="font-bold">
                  {mission.name}
                </h3>

                <p className="text-sm text-slate-400">
                  Mission Node
                </p>
              </div>
            </div>

            {index !== missions.length - 1 && (
              <div className="ml-6 h-8 w-1 bg-slate-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

