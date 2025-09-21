import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'date', 'month'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'テキストを入力',
    value: '',
    onChange: () => {},
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '1000',
    value: '',
    onChange: () => {},
  },
};

export const Date: Story = {
  args: {
    type: 'date',
    value: '2025-01-01',
    onChange: () => {},
  },
};

export const Month: Story = {
  args: {
    type: 'month',
    value: '2025-01',
    onChange: () => {},
  },
};

export const Required: Story = {
  args: {
    type: 'text',
    placeholder: '必須項目',
    required: true,
    value: '',
    onChange: () => {},
  },
};