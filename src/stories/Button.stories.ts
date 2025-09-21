import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ボタン',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'ボタン',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    children: '削除',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    children: '小さいボタン',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: '大きいボタン',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: '無効なボタン',
    disabled: true,
  },
};