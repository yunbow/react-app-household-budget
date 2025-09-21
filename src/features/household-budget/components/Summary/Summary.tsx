import { Text } from '../../../../components/Text';
import { SummaryCard } from '../SummaryCard';
import { TransactionSummary } from '../../types';
import styles from './Summary.module.css';

interface SummaryProps {
  summary: TransactionSummary;
}

export const Summary = ({ summary }: SummaryProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.balance}>
        <Text as="h2" size="large" color="primary">
          残高
        </Text>
        <Text as="p" size="xlarge" weight="bold" color={summary.totalBalance >= 0 ? 'success' : 'danger'}>
          {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(summary.totalBalance)}
        </Text>
      </div>

      <div className={styles.summaryItems}>
        <SummaryCard
          title="収入"
          amount={summary.totalIncome}
          type="income"
        />
        <SummaryCard
          title="支出"
          amount={summary.totalExpense}
          type="expense"
        />
      </div>
    </div>
  );
};