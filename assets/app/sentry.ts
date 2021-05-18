import Vue from 'vue';
import * as Sentry from '@sentry/vue';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  Vue,
});
