import { ReactNode } from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  weight?: 'normal' | 'bold';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'inherit';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const Text = ({
  children,
  as: Component = 'p',
  size = 'medium',
  weight = 'normal',
  color = 'inherit',
  align = 'left',
  className = ''
}: TextProps) => {
  const textClass = `${styles.text} ${styles[size]} ${styles[weight]} ${styles[color]} ${styles[align]} ${className}`;

  return <Component className={textClass}>{children}</Component>;
};