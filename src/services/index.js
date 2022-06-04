import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

let instance: any = axios;

const initialHeader = {
  'Content-Type': 'application/json',
  Authorization: '',
};

export function setUpAxios() {
  instance.interceptors.request.use((req: AxiosRequestConfig) => {
    return req;
  });
  instance.interceptors.response.use((res: AxiosResponse) => {
    return res;
  });
}

export default function APIKit(config: AxiosRequestConfig) {
  const baseURL = 'https://rickandmortyapi.com/api/';

  const headers = {
    ...initialHeader,
  };

  const finalConfig = {
    baseURL,
    headers,
    ...config,
  };
  return instance.request(finalConfig);
}
