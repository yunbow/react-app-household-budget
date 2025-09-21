import { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Text } from '../../../../components/Text';
import { Transaction } from '../../types';
import { Config } from '../../../../Config';
import styles from './ExpenseChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseChartProps {
  transactions: Transaction[];
}

export const ExpenseChart = ({ transactions }: ExpenseChartProps) => {
  const chartRef = useRef<ChartJS<'doughnut'> | null>(null);

  const prepareChartData = () => {
    const categoryExpenses: { [key: string]: number } = {};
    const expenseTransactions = transactions.filter(t => t.type === 'expense');

    expenseTransactions.forEach(transaction => {
      if (categoryExpenses[transaction.category]) {
        categoryExpenses[transaction.category] += transaction.amount;
      } else {
        categoryExpenses[transaction.category] = transaction.amount;
      }
    });

    const labels = Object.keys(categoryExpenses);
    const data = Object.values(categoryExpenses);

    return {
      labels,
      datasets: [{
        data,
        backgroundColor: Config.CHART_COLORS.slice(0, labels.length),
        borderWidth: 1
      }]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw;
            const formattedValue = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(value);
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${formattedValue} (${percentage}%)`;
          }
        }
      }
    }
  };

  const chartData = prepareChartData();
  const hasData = chartData.labels.length > 0;

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.expenseChart}>
      <Text as="h2" color="primary">
        レポート
      </Text>

      <div className={styles.chartContainer}>
        {hasData ? (
          <Doughnut
            ref={chartRef}
            data={chartData}
            options={chartOptions}
          />
        ) : (
          <div className={styles.noDataMessage}>
            <Text color="secondary">支出データがありません</Text>
          </div>
        )}
      </div>
    </div>
  );
};