import { useState, useEffect } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { Text } from '../../../../components/Text';
import { FormField } from '../FormField';
import { Transaction, TransactionType } from '../../types';
import { Config } from '../../../../Config';
import { getCurrentDateString } from '../../../../utils/formatters';
import styles from './TransactionForm.module.css';

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  editingTransaction?: Transaction | null;
  onCancelEdit?: () => void;
}

export const TransactionForm = ({
  onSubmit,
  editingTransaction,
  onCancelEdit
}: TransactionFormProps) => {
  const [date, setDate] = useState(getCurrentDateString());
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<TransactionType>('expense');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (editingTransaction) {
      setDate(editingTransaction.date);
      setDescription(editingTransaction.description);
      setAmount(editingTransaction.amount.toString());
      setType(editingTransaction.type);
      setCategory(editingTransaction.category);
    } else {
      resetForm();
    }
  }, [editingTransaction]);

  useEffect(() => {
    const categories = type === 'income' ? Config.CATEGORIES.INCOME : Config.CATEGORIES.EXPENSE;
    if (categories.length > 0 && !categories.find(cat => cat.value === category)) {
      setCategory(categories[0].value);
    }
  }, [type, category]);

  const resetForm = () => {
    setDate(getCurrentDateString());
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory(Config.CATEGORIES.EXPENSE[0].value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !description || !amount || parseFloat(amount) <= 0) {
      alert('すべての項目を正しく入力してください');
      return;
    }

    const transaction: Omit<Transaction, 'id'> = {
      date,
      description,
      amount: parseFloat(amount),
      type,
      category
    };

    onSubmit(transaction);

    if (!editingTransaction) {
      resetForm();
      alert('取引を追加しました');
    } else {
      alert('取引を更新しました');
    }
  };

  const handleCancel = () => {
    resetForm();
    onCancelEdit?.();
  };

  const currentCategories = type === 'income' ? [...Config.CATEGORIES.INCOME] : [...Config.CATEGORIES.EXPENSE];

  return (
    <div className={styles.transactionForm}>
      <Text as="h2" color="primary">
        {editingTransaction ? '取引編集' : '新規取引'}
      </Text>

      <form onSubmit={handleSubmit}>
        <FormField label="日付" required id="date">
          <Input
            id="date"
            type="date"
            value={date}
            onChange={setDate}
            required
          />
        </FormField>

        <FormField label="内容" required id="description">
          <Input
            id="description"
            type="text"
            placeholder="例: 食料品、給料など"
            value={description}
            onChange={setDescription}
            required
          />
        </FormField>

        <FormField label="金額" required id="amount">
          <Input
            id="amount"
            type="number"
            placeholder="例: 1000"
            value={amount}
            onChange={setAmount}
            required
          />
        </FormField>

        <FormField label="取引タイプ" required id="type">
          <Select
            id="type"
            value={type}
            onChange={(value) => setType(value as TransactionType)}
            options={[
              { value: 'income', label: '収入' },
              { value: 'expense', label: '支出' }
            ]}
            required
          />
        </FormField>

        <FormField label="カテゴリ" id="category">
          <Select
            id="category"
            value={category}
            onChange={setCategory}
            options={currentCategories}
          />
        </FormField>

        <div className={styles.buttonGroup}>
          <Button type="submit">
            {editingTransaction ? '更新' : '追加'}
          </Button>
          {editingTransaction && (
            <Button type="button" variant="secondary" onClick={handleCancel}>
              キャンセル
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};