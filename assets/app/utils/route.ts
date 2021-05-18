import Routing, { RouteParams } from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources';
import routes from '../../_generated/routes.json';

export type RouteParameters = RouteParams;

Routing.setRoutingData(routes);

export function generateRoute(name: string, params: RouteParameters = {}, absolute = false): string {
  return Routing.generate(name, params, absolute);
}
