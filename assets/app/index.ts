import '../vendor';
import './styles/index.css';

if (process.env.NODE_ENV === 'production') {
  require('./sentry'); // eslint-disable-line global-require
}
