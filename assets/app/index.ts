import { initSentry } from '@app/sentry';
import '../vendor';
import './styles/index.css';

if (process.env.NODE_ENV === 'production') {
  initSentry();
}
