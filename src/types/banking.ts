export type AccountType = 'PRIVATE' | 'BUSINESS';

export interface Account {
  id: string;
  name: string;
  iban: string;
  balance: number;
  type: AccountType;
}

export interface Movement {
  id: string;
  description: string;
  date: string;
  amount: number;
  category: string;
}
