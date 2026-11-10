export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
}

export interface DashboardData {
  balance: number;
  income: number;
  expenses: number;
  transactions: Transaction[];
}
