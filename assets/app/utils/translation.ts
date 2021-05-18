import Translator from 'bazinga-translator';

Translator.fromJSON(require('../../_generated/translations/config.json'));
Translator.fromJSON(require('../../_generated/translations/fr.json'));

export function trans(id: string, parameters?: Record<string, unknown>, domain?: string, locale?: string): string {
  return Translator.trans(id, parameters, domain, locale);
}

export function transChoice(
  id: string,
  number: number,
  parameters?: Record<string, unknown>,
  domain?: string,
  locale?: string
): string {
  return Translator.transChoice(id, number, parameters, domain, locale);
}
