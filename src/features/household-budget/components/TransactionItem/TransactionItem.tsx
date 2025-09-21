import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import { Transaction } from '../../types';
import styles from './TransactionItem.module.css';

interface TransactionItemProps {
  transaction: Transaction;
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

export const TransactionItem = ({
  transaction,
  onEdit,
  onDelete
}: TransactionItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  };

  const handleEdit = () => {
    onEdit(transaction);
  };

  const handleDelete = () => {
    if (confirm('この取引を削除してもよろしいですか？')) {
      onDelete(transaction.id);
    }
  };

  return (
    <tr className={styles.transactionItem}>
      <td>
        <Text size="small">{formatDate(transaction.date)}</Text>
      </td>
      <td>
        <Text size="small">{transaction.description}</Text>
      </td>
      <td>
        <Text size="small">{transaction.category}</Text>
      </td>
      <td>
        {transaction.type === 'income' && (
          <Text size="small" color="success">
            {formatCurrency(transaction.amount)}
          </Text>
        )}
      </td>
      <td>
        {transaction.type === 'expense' && (
          <Text size="small" color="danger">
            {formatCurrency(transaction.amount)}
          </Text>
        )}
      </td>
      <td>
        <div className={styles.actions}>
          <Button size="small" variant="secondary" onClick={handleEdit}>
            編集
          </Button>
          <Button size="small" variant="danger" onClick={handleDelete}>
            削除
          </Button>
        </div>
      </td>
    </tr>
  );
};