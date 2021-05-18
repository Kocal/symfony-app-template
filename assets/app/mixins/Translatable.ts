import { trans, transChoice } from '@app/utils/translation';
import { Component, Vue } from 'vue-property-decorator';

@Component
export class Translatable extends Vue {
  // eslint-disable-next-line class-methods-use-this
  trans(id: string, parameters?: Record<string, unknown>, domain?: string, locale?: string): string {
    return trans(id, parameters, domain, locale);
  }

  // eslint-disable-next-line class-methods-use-this
  transChoice(
    id: string,
    number: number,
    parameters?: Record<string, unknown>,
    domain?: string,
    locale?: string
  ): string {
    return transChoice(id, number, parameters, domain, locale);
  }
}
