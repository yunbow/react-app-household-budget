export const Config = {
  APP_NAME: '家計簿',
  CURRENCY: 'JPY',
  LOCALE: 'ja-JP',

  CATEGORIES: {
    INCOME: [
      { value: '給料', label: '給料' },
      { value: '賞与', label: '賞与' },
      { value: '副収入', label: '副収入' },
      { value: 'お小遣い', label: 'お小遣い' },
      { value: '臨時収入', label: '臨時収入' },
      { value: 'その他', label: 'その他' }
    ],
    EXPENSE: [
      { value: '食費', label: '食費' },
      { value: '住居費', label: '住居費' },
      { value: '光熱費', label: '光熱費' },
      { value: '通信費', label: '通信費' },
      { value: '交通費', label: '交通費' },
      { value: '医療費', label: '医療費' },
      { value: '娯楽費', label: '娯楽費' },
      { value: '教育費', label: '教育費' },
      { value: '衣服費', label: '衣服費' },
      { value: '日用品', label: '日用品' },
      { value: 'その他', label: 'その他' }
    ]
  },

  CHART_COLORS: [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
    '#FF9F40', '#8C9EFF', '#FF8A80', '#A5D6A7', '#E1BEE7'
  ],

  STORAGE_KEY: 'household_budget_transactions'
} as const;