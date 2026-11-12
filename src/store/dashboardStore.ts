import type { DashboardData } from '@/types/dashboard';

export const demoDashboard: DashboardData = {
  account: {
    id: 'account-1',
    name: 'Conto principale',
    iban: 'IT60X0542811101000000123456',
    balance: 12450.75,
    type: 'PRIVATE',
  },
  balance: 12450.75,
  income: 2800,
  expenses: 1349.2,
  transactions: [
    {
      id: '1',
      description: 'Stipendio',
      date: '2026-11-02',
      amount: 2800,
      category: 'Entrata',
    },
    {
      id: '2',
      description: 'Supermercato',
      date: '2026-11-04',
      amount: -85.4,
      category: 'Spesa',
    },
    {
      id: '3',
      description: 'Bolletta energia',
      date: '2026-11-06',
      amount: -96.2,
      category: 'Utenze',
    },
  ],
};
