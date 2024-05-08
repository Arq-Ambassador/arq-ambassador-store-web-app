import axios, { AxiosInstance } from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const GATEWAY_URL = 'https://api.ambassadors.ink';
export const CHECKOUT_WEB_APP_URL = 'https://checkout.ambassadors.ink';

const authService = axios.create({
  baseURL: `${GATEWAY_URL}/auth/api/ambassador`,
  withCredentials: true
});

const registrationExperienceService = axios.create({
  baseURL: `${GATEWAY_URL}/registration-exp/api/users`,
  withCredentials: true
});

const usersService = axios.create({
  baseURL: `${GATEWAY_URL}/users/api/ambassador`,
  withCredentials: true
});
setJWTToken(usersService);

const coreService = axios.create({
  baseURL: `${GATEWAY_URL}/core/api/ambassador`,
  withCredentials: true
});
setJWTToken(coreService);

export {
  authService,
  registrationExperienceService,
  usersService,
  coreService,
};

function setJWTToken(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
