import { generateRoute, RouteParameters } from '@app/utils/route';
import { Component, Vue } from 'vue-property-decorator';

@Component
export class RoutingMixin extends Vue {
  // eslint-disable-next-line class-methods-use-this
  path(name: string, params: RouteParameters = {}): string {
    return generateRoute(name, params);
  }
}
