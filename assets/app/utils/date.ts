import { format as _format } from 'date-fns';
import fr from 'date-fns/locale/fr';

export function formatDate(date: Date | number, format: string): string {
  return _format(date, format, { locale: fr });
}
