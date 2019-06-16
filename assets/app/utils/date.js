import fr from 'date-fns/locale/fr';
import { format as _format } from 'date-fns';

export const formatDate = (date, format) => _format(date, format, { locale: fr });
