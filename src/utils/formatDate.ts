import { format } from 'date-fns';

export default function (date: string | Date): string {
  const unformatted = new Date(date);
  const pattern = 'dd/MM/yyyy';
  return format(unformatted, pattern);
}
