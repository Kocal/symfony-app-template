import { trans as doTrans, transChoice as doTransChoice } from '@app/utils/translation';

export function useTranslator() {
  function trans(id: string, parameters?: Record<string, unknown>, domain?: string, locale?: string): string {
    return doTrans(id, parameters, domain, locale);
  }

  function transChoice(
    id: string,
    number: number,
    parameters?: Record<string, unknown>,
    domain?: string,
    locale?: string
  ): string {
    return doTransChoice(id, number, parameters, domain, locale);
  }

  return { trans, transChoice };
}
