import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../../features/household-budget/components/FormField';
import { Input } from '../../components/Input';

const meta: Meta<typeof FormField> = {
  title: 'Features/HouseholdBudget/Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'テキスト入力',
    children: <Input value="" onChange={(_value: string) => {}} placeholder="入力してください" />,
  },
};

export const Required: Story = {
  args: {
    label: '必須項目',
    required: true,
    children: <Input value="" onChange={(_value: string) => {}} placeholder="必須入力" required />,
  },
};

export const WithId: Story = {
  args: {
    label: 'ID付きフィールド',
    id: 'sample-field',
    children: <Input id="sample-field" value="" onChange={(_value: string) => {}} placeholder="ID付き入力" />,
  },
};