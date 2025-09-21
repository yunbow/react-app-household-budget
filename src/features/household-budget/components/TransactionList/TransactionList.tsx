import { Text } from '../../../../components/Text';
import { TransactionItem } from '../TransactionItem';
import { FilterControls } from '../FilterControls';
import { Transaction, FilterState } from '../../types';
import styles from './TransactionList.module.css';

interface TransactionListProps {
  transactions: Transaction[];
  filter: FilterState;
  onFilterChange: (filter: FilterState) => void;
  onApplyFilter: () => void;
  onEditTransaction: (transaction: Transaction) => void;
  onDeleteTransaction: (id: string) => void;
}

export const TransactionList = ({
  transactions,
  filter,
  onFilterChange,
  onApplyFilter,
  onEditTransaction,
  onDeleteTransaction
}: TransactionListProps) => {
  return (
    <div className={styles.transactionList}>
      <Text as="h2" color="primary">
        取引履歴
      </Text>

      <FilterControls
        filter={filter}
        onFilterChange={onFilterChange}
        onApplyFilter={onApplyFilter}
      />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>日付</th>
              <th>内容</th>
              <th>カテゴリ</th>
              <th>収入</th>
              <th>支出</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.emptyMessage}>
                  取引データがありません
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  onEdit={onEditTransaction}
                  onDelete={onDeleteTransaction}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};