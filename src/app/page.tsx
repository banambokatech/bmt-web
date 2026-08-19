import { AppShell } from "@/components/layout/app-shell";

export default function Home() {
  return (
    <AppShell>
      <div>
        <h1 className="text-4xl font-bold">
          Welcome to Bana Mboka Tech
        </h1>

        <p className="mt-4 text-slate-400">
          Former la prochaine génération d'innovateurs africains.
        </p>
      </div>
    </AppShell>
  );
}
