import type { DashboardData } from '@/types/dashboard';

export const demoDashboard: DashboardData = {
  balance: 12450.75,
  income: 2800,
  expenses: 1349.2,
  transactions: [
    { id: '1', description: 'Stipendio', date: '2026-11-02', amount: 2800 },
    { id: '2', description: 'Supermercato', date: '2026-11-04', amount: -85.4 },
    { id: '3', description: 'Bolletta energia', date: '2026-11-06', amount: -96.2 },
  ],
};
