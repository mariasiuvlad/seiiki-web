const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api/heating',
    proxy({
      target: 'http://192.168.0.102',
      changeOrigin: true,
      pathRewrite: {
        '^/api/heating/status': '/',
        '^/api/heating/on': '/on',
        '^/api/heating/off': '/off',
      },
    })
  );
};
