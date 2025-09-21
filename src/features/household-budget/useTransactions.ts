import { useState, useEffect } from 'react';
import { Transaction, TransactionSummary } from './types';
import { Config } from '../../Config';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem(Config.STORAGE_KEY);
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const saveTransactions = (newTransactions: Transaction[]) => {
    setTransactions(newTransactions);
    localStorage.setItem(Config.STORAGE_KEY, JSON.stringify(newTransactions));
  };

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString()
    };
    const newTransactions = [...transactions, newTransaction];
    saveTransactions(newTransactions);
  };

  const updateTransaction = (id: string, updatedTransaction: Omit<Transaction, 'id'>) => {
    const newTransactions = transactions.map(transaction =>
      transaction.id === id ? { ...updatedTransaction, id } : transaction
    );
    saveTransactions(newTransactions);
  };

  const deleteTransaction = (id: string) => {
    const newTransactions = transactions.filter(transaction => transaction.id !== id);
    saveTransactions(newTransactions);
  };

  const getSummary = (): TransactionSummary => {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    });

    return {
      totalIncome,
      totalExpense,
      totalBalance: totalIncome - totalExpense
    };
  };

  const filterTransactions = (month?: string, category?: string): Transaction[] => {
    return transactions.filter(transaction => {
      const monthMatch = !month || transaction.date.startsWith(month);
      const categoryMatch = !category || category === 'all' || transaction.category === category;
      return monthMatch && categoryMatch;
    });
  };

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getSummary,
    filterTransactions
  };
};