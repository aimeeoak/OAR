const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:5000',
  //     changeOrigin: true,
  //   })
  // );
  app.use("/articles", createProxyMiddleware({
    target: "http://localhost:3000/",
    changeOrigin: true
    })
  );
  app.use("/users", createProxyMiddleware({
    target: "http://localhost:3000/",
    changeOrigin: true
    })
  );
  app.use("/projects", createProxyMiddleware({
    target: "http://localhost:3000/",
    changeOrigin: true
    })
  );
  // this app.use is for the future api call :) 
  // app.use("/articles", createProxyMiddleware({
  //   target: ['serpapi'],
  //   changeOrigin: true
  //   })
  // );
};