import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstance: Readonly<AxiosInstance> = axios.create({
    baseURL: 'api',
    timeout: 5000
});
axiosInstance.defaults.headers.get.Accepts = 'application/json';
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default axiosInstance
// export const Games = async (slug: string): Promise<none> => {
//     const res = await instance.get('/');
//     return res?.data;
// }