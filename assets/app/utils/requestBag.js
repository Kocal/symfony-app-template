export const makeRequestBag = ({ data, loading = false } = {}) => ({
  data,
  loading,
  success: null,
  successMessage: null,
  error: null,
  errorMessage: null,
});
