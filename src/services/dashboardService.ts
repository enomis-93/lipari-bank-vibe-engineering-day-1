import { demoDashboard } from '@/store/dashboardStore';
import type { DashboardData } from '@/types/dashboard';

export function getDashboard(): DashboardData {
  return demoDashboard;
}
