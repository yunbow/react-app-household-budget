import { ReactNode } from 'react';
import styles from './Label.module.css';

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

export const Label = ({
  children,
  htmlFor,
  required = false,
  className = ''
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
};