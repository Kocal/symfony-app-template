import { generateRoute, RouteParameters } from '@app/utils/route';

export function useRouter() {
  function toPath(name: string, params: RouteParameters = {}): string {
    return generateRoute(name, params);
  }

  return { toPath };
}
