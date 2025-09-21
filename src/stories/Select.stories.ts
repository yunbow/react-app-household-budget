import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const categoryOptions = [
  { value: '食費', label: '食費' },
  { value: '住居費', label: '住居費' },
  { value: '光熱費', label: '光熱費' },
  { value: '通信費', label: '通信費' },
  { value: '交通費', label: '交通費' },
];

export const Default: Story = {
  args: {
    value: '食費',
    options: categoryOptions,
    onChange: () => {},
  },
};

export const Required: Story = {
  args: {
    value: '',
    options: [
      { value: '', label: '選択してください' },
      ...categoryOptions
    ],
    required: true,
    onChange: () => {},
  },
};