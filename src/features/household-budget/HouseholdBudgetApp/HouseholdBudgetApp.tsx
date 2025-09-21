import { useState } from 'react';
import { Text } from '../../../components/Text';
import { Summary } from '../components/Summary';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionList } from '../components/TransactionList';
import { ExpenseChart } from '../components/ExpenseChart';
import { useTransactions } from '../useTransactions';
import { useFilter } from '../useFilter';
import { Transaction } from '../types';
import { Config } from '../../../Config';
import styles from './HouseholdBudgetApp.module.css';

export const HouseholdBudgetApp = () => {
  const {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getSummary,
    filterTransactions
  } = useTransactions();

  const {
    filter,
    appliedFilter,
    updateFilter,
    applyFilter
  } = useFilter();

  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, transaction);
      setEditingTransaction(null);
    } else {
      addTransaction(transaction);
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    // スクロールしてフォームを表示
    document.querySelector(`.${styles.formSection}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id: string) => {
    deleteTransaction(id);
    // 編集中の取引が削除された場合、編集をキャンセル
    if (editingTransaction?.id === id) {
      setEditingTransaction(null);
    }
  };

  const summary = getSummary();
  const filteredTransactions = filterTransactions(
    appliedFilter.month,
    appliedFilter.category === 'all' ? undefined : appliedFilter.category
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text as="h1" size="xlarge" color="inherit" align="center">
          {Config.APP_NAME}
        </Text>
      </header>

      <main className={styles.main}>
        <Summary summary={summary} />

        <div className={styles.formSection}>
          <TransactionForm
            onSubmit={handleAddTransaction}
            editingTransaction={editingTransaction}
            onCancelEdit={handleCancelEdit}
          />
        </div>

        <TransactionList
          transactions={filteredTransactions}
          filter={filter}
          onFilterChange={updateFilter}
          onApplyFilter={applyFilter}
          onEditTransaction={handleEditTransaction}
          onDeleteTransaction={handleDeleteTransaction}
        />

        <ExpenseChart transactions={transactions} />
      </main>

      <footer className={styles.footer}>
        <Text size="small" color="secondary" align="center">
          {Config.APP_NAME} &copy; 2025
        </Text>
      </footer>
    </div>
  );
};