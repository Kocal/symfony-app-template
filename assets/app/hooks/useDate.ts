import { formatDate } from '@app/utils/date';

export function useDate() {
  function format(date: Date | number, format: string): string {
    return formatDate(date, format);
  }

  return { format };
}
