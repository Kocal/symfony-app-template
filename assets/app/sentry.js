import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Vue as IntegrationVue } from '@sentry/integrations';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new IntegrationVue({
      Vue,
      attachProps: true,
    }),
  ],
});
