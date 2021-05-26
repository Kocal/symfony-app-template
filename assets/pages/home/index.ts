import { getSentry } from '@app/sentry';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

if (process.env.NODE_ENV === 'production') {
  app.config.errorHandler = (error, _, info) => {
    const sentry = getSentry();
    sentry.setTag('info', info);
    sentry.captureException(error);
  };
}

app.mount('#app');
