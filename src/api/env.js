
let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://39.96.36.61';
}
export default baseUrl


