import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard } from '../../features/household-budget/components/SummaryCard';

const meta: Meta<typeof SummaryCard> = {
  title: 'Features/HouseholdBudget/Components/SummaryCard',
  component: SummaryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['income', 'expense', 'balance'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Income: Story = {
  args: {
    title: '収入',
    amount: 300000,
    type: 'income',
  },
};

export const Expense: Story = {
  args: {
    title: '支出',
    amount: 250000,
    type: 'expense',
  },
};

export const PositiveBalance: Story = {
  args: {
    title: '残高',
    amount: 50000,
    type: 'balance',
  },
};

export const NegativeBalance: Story = {
  args: {
    title: '残高',
    amount: -10000,
    type: 'balance',
  },
};