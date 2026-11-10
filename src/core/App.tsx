import { Dashboard } from '@/features/dashboard/Dashboard';
import { AppShell } from '@/core/layout/AppShell';

export function App() {
  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
}
