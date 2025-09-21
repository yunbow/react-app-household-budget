import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'inherit'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'これはテキストです',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: '見出し1',
    size: 'xlarge',
    weight: 'bold',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: '見出し2',
    size: 'large',
    weight: 'bold',
    color: 'primary',
  },
};

export const Primary: Story = {
  args: {
    children: 'プライマリーテキスト',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: '成功テキスト',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: '危険テキスト',
    color: 'danger',
  },
};

export const Centered: Story = {
  args: {
    children: '中央揃えテキスト',
    align: 'center',
  },
};