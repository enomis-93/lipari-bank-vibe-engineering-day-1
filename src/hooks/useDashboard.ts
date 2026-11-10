import { useMemo } from 'react';
import { getDashboard } from '@/services/dashboardService';

export function useDashboard() {
  return useMemo(() => getDashboard(), []);
}
