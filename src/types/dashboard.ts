import type { Account, Movement } from '@/types/banking';

export interface DashboardData {
  account: Account;
  balance: number;
  income: number;
  expenses: number;
  transactions: Movement[];
}
