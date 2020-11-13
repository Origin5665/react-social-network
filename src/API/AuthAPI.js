import Axios from 'axios';
import { BASE_URL } from '../constant';

const instance = Axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   }
});

export const AuthAPI = {
   enterApp(email, password, rememberMe = false) {
      return instance.post('/auth/login', { email, password, rememberMe })
         .then(res => res)
   },

   outApp() {
      return instance.delete('/auth/login')
         .then(res => res)
   }
};