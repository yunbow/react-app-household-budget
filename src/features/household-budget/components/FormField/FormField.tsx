import { ReactNode } from 'react';
import { Label } from '../../../../components/Label';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

export const FormField = ({
  label,
  required = false,
  children,
  className = '',
  id
}: FormFieldProps) => {
  return (
    <div className={`${styles.formField} ${className}`}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children}
    </div>
  );
};