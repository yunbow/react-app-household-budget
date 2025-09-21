import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { FormField } from '../FormField';
import { FilterState } from '../../types';
import { Config } from '../../../../Config';
import styles from './FilterControls.module.css';

interface FilterControlsProps {
  filter: FilterState;
  onFilterChange: (filter: FilterState) => void;
  onApplyFilter: () => void;
}

export const FilterControls = ({
  filter,
  onFilterChange,
  onApplyFilter
}: FilterControlsProps) => {
  const handleMonthChange = (month: string) => {
    onFilterChange({ ...filter, month });
  };

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filter, category });
  };

  const categoryOptions = [
    { value: 'all', label: 'すべて' },
    ...Config.CATEGORIES.EXPENSE,
    ...Config.CATEGORIES.INCOME
  ];

  return (
    <div className={styles.filterControls}>
      <FormField label="月で絞り込み" id="filter-month">
        <Input
          id="filter-month"
          type="month"
          value={filter.month}
          onChange={handleMonthChange}
        />
      </FormField>

      <FormField label="カテゴリで絞り込み" id="filter-category">
        <Select
          id="filter-category"
          value={filter.category}
          onChange={handleCategoryChange}
          options={categoryOptions}
        />
      </FormField>

      <Button onClick={onApplyFilter} className={styles.applyButton}>
        絞り込む
      </Button>
    </div>
  );
};