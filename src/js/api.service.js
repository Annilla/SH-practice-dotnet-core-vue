import axios from 'axios';
// import store from '../store/index';

/**
 * Base URL
 */
// https://andy6804tw.github.io/2019/09/21/fix-cors-problem/
const RootAPI = `https://cors-anywhere.herokuapp.com/https://api.github.com`;
// const appId = `${APP_ID}`;
// const appSecret = `${APP_SECRET}`;
// Monitor
let apiRequest = axios.create({
  baseURL: `${RootAPI}`,
  headers: {
    // Fixed for IE Cache
    // https://forum.vuejs.org/t/component-v-bind-is-and-internet-explorer-ie-11-problem-with-cached-dom/74852
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '-1',
  },
});

// Add a request interceptor
// apiRequest.interceptors.request.use(
//   config => {
//     // API AccessToken
//     config.headers['AccessToken'] = store.state.apiAccessToken;
//     config.headers['System'] = `${appId}`;
//     return config;
//   },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

/**
 * API
 */
// Auth api
export const apiService = {
  searchUser: {
    path: function(name) { return `/users/${name}`; },
    request: function(name) { return apiRequest.get(this.path(name)); }
  },
};
