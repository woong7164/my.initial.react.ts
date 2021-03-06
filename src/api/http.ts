import axios from 'axios';

interface HttpParam {
  url: string;
  params?: any;
}
const http = {
  get: (obj: HttpParam): Promise<any> => {
    return axios.get(obj.url, { params: obj.params });
  },
  post: (obj: HttpParam): Promise<any> => {
    return axios.post(obj.url, obj.params);
  },
};

export default http;
