import { ChangeEvent } from 'react';
import styles from './Select.module.css';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Select = ({
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  className = '',
  id
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      id={id}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      className={`${styles.select} ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};