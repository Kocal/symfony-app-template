export const makePagination = ({ page = 1, perPage = 20 } = {}) => ({
  page,
  perPage,
  total: -1,
});
