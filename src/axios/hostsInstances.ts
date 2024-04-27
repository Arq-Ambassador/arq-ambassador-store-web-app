import axios, { AxiosInstance } from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const HOST_URL = 'http://www.ambassadors.ink';
export const CHECKOUT_WEB_APP_URL = 'http://checkout.ambassadors.ink';



const authService = axios.create({
  baseURL: `${HOST_URL}/auth/api/ambassador`,
  withCredentials: true
});

const registrationExperienceService = axios.create({
  baseURL: `${HOST_URL}/registration-exp/api/users`,
  withCredentials: true
});

const usersService = axios.create({
  baseURL: `${HOST_URL}/users/api/ambassador`,
  withCredentials: true
});
setJWTToken(usersService);

const coreService = axios.create({
  baseURL: `${HOST_URL}/core/api/ambassador`,
  withCredentials: true
});
setJWTToken(coreService);

export {
  authService,
  registrationExperienceService,
  usersService,
  coreService
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
