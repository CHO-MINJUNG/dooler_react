const {createProxyMiddleware} = require('http-proxy-middleware');
const serverDomainUrl = 'http://localhost';
// proxy 설정은 local에서만 먹혀서 배포용 domain을 적을 필요가 없음
const PORT = 8000;

const serverUrl = serverDomainUrl+':'+PORT;

module.exports = function (app) {

    app.use(
        '/api',
        createProxyMiddleware({
            target: serverUrl,
            changeOrigin: true
        })
    );
};