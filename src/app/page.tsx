import { AppShell } from "@/components/layout/app-shell";
import { DashboardHero } from "@/components/dashboard/dashboard-hero";
import { CurrentMission } from "@/components/dashboard/current-mission";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        <DashboardHero />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">
                Mission Tree
              </h2>

              <p className="mt-4 text-slate-400">
                Coming in the next step.
              </p>
            </div>
          </div>

          <CurrentMission />
        </div>
      </div>
    </AppShell>
  );
}
