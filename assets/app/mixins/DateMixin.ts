import { formatDate } from '@app/utils/date';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DateMixin extends Vue {
  // eslint-disable-next-line class-methods-use-this
  formatDate(date: Date | number, format: string): string {
    return formatDate(date, format);
  }
}
