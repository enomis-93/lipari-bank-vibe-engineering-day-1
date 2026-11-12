import { Dashboard } from '@/features/dashboard/Dashboard';
import { AppShell } from '@/core/layout/AppShell';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SectionPlaceholder } from '@/shared/ui/SectionPlaceholder';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<SectionPlaceholder title="Conti" />} />
        <Route path="/investments" element={<SectionPlaceholder title="Investimenti" />} />
        <Route path="/polizze" element={<SectionPlaceholder title="Polizze" />} />
        <Route path="/admin" element={<SectionPlaceholder title="Admin" />} />
        <Route path="*" element={<RouteFallback />} />
      </Routes>
    </AppShell>
  );
}

function RouteFallback() {
  const { pathname } = useLocation();

  return <SectionPlaceholder title={`Pagina non trovata: ${pathname}`} />;
}
