module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/index' },
    '/about': { page: '/about' },
    '/slide': { page: '/slide' },
  }),
};
