import { ChartItem, ExpenseType } from '../models/shared.model';

export const ChartData: ChartItem[] = [
  {
    period: '1M',
    personal: 150,
    shopping: 90,
    phone: 60,
    other: 80,
  },
  {
    period: '6M',
    personal: 320,
    shopping: 240,
    phone: 255,
    other: 298,
  },
  {
    period: '1Y',
    personal: 950,
    shopping: 930,
    phone: 738,
    other: 490,
  },
  {
    period: 'ALL TIME',
    personal: 1800,
    shopping: 1421,
    phone: 1265,
    other: 1000,
  },
];

export const ExpenseTypes: ExpenseType[] = [
  {
    colorCode: '#4C49ED',
    name: 'Personal',
  },
  {
    colorCode: '#9D9BF4',
    name: 'Shopping',
  },
  {
    colorCode: '#4FD18B',
    name: 'Phone',
  },
  {
    colorCode: '#141197',
    name: 'Other',
  },
];
