import { Text } from '../../../../components/Text';
import styles from './SummaryCard.module.css';

interface SummaryCardProps {
  title: string;
  amount: number;
  type?: 'income' | 'expense' | 'balance';
  className?: string;
}

export const SummaryCard = ({
  title,
  amount,
  type = 'balance',
  className = ''
}: SummaryCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(value);
  };

  const getAmountColor = () => {
    if (type === 'income') return 'success';
    if (type === 'expense') return 'danger';
    return amount >= 0 ? 'success' : 'danger';
  };

  return (
    <div className={`${styles.summaryCard} ${styles[type]} ${className}`}>
      <Text as="h3" size="medium" color="primary">
        {title}
      </Text>
      <Text as="p" size="xlarge" weight="bold" color={getAmountColor()}>
        {formatCurrency(amount)}
      </Text>
    </div>
  );
};