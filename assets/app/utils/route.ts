import { RouteParams, Router } from 'symfony-ts-router';
import routes from '../../_generated/routes.json';

const routing = new Router();
routing.setRoutingData(routes);

export type RouteParameters = RouteParams;

export function generateRoute(name: string, params: RouteParams = {}, absolute = false): string {
  return routing.generate(name, params, absolute);
}
