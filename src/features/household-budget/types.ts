export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
}

export interface TransactionSummary {
  totalIncome: number;
  totalExpense: number;
  totalBalance: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
}

export interface FilterState {
  month: string;
  category: string;
}

export type TransactionType = 'income' | 'expense';

export interface CategoryOption {
  value: string;
  label: string;
}