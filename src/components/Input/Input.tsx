import { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'number' | 'date' | 'month';
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  id
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      className={`${styles.input} ${className}`}
    />
  );
};