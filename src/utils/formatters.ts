import { Config } from '../Config';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(Config.LOCALE, {
    style: 'currency',
    currency: Config.CURRENCY
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
};

export const getCurrentDateString = (): string => {
  return new Date().toISOString().substr(0, 10);
};

export const getCurrentYearMonth = (): string => {
  return new Date().toISOString().substr(0, 7);
};