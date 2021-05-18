interface RequestBagOptions<D extends unknown> {
  data: D;
  loading?: boolean;
}

export interface RequestBag<D> {
  data: D;
  loading?: boolean;
  success: boolean | null;
  successMessage: string | null;
  error: boolean | Error | null;
  errorMessage: string | null;
  reset: (options: RequestBagOptions<D>) => void;
}

export const makeRequestBag = <D>({ data, loading = false }: RequestBagOptions<D>): RequestBag<D> => ({
  data,
  loading,
  success: null,
  successMessage: null,
  error: null,
  errorMessage: null,
  reset(options: RequestBagOptions<D>): void {
    Object.assign(this, makeRequestBag(options));
  },
});
