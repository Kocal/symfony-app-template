import * as Sentry from '@sentry/browser';

let initialized = false;

export function initSentry(): void {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
  initialized = true;
}

export function getSentry(): typeof Sentry {
  if (!initialized) {
    throw new Error('Sentry has not been initialized, you must call `initSentry()` before.');
  }
  return Sentry;
}
