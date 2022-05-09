import Cookies from 'universal-cookie';
import { delete_cookie } from '../utils/HandleCookies';
import {
   currentDomain
} from '../utils/VerifyDomain';
import axiosClient from './axiosClient';

const path = '/auth';
const cookies = new Cookies();
const current = new Date();
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);

const authApi = {
   register: (params) => {
      const url = path + '/register';
      return axiosClient.post(url, params);
   },
   login: (params) => {
      const url = path + '/login';
      return axiosClient
         .post(url, params)
         .then((response) => {
            if (response.data.success) {
               // localStorage.setItem("authToken", JSON.stringify(response.data.data));
               // var test = {
               //    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGFuZ0N1dGUiLCJyb2xlUGVybWlzc2lvbnMiOlsidXNlcjpyZWFkIiwidXNlcjp3cml0ZSJdLCJleHAiOjE2NDgyMTU5OTIsInJvbGVOYW1lcyI6WyJVU0VSIl19.Ytt6vqJYFyxLMIb6JPPRDzec-H6Y18zDTwu6QzLLwxQ",
               //    refreshToken: response.data.data.refreshToken,
               // }
               cookies.set("authToken", JSON.stringify(response.data.data), {
                  path: '/',
                  expires: nextYear,
               });
               // cookies.set("authToken", JSON.stringify(test), {
               //    path: '/',
               //    expires: nextYear,
               // });
            }
            console.log(response)
            return response;
         });
   },
   confirmEmail: (token) => {
      const url = path + '/active';
      return axiosClient.get(url, {
         params: {
            key: token,
         }
      });
   },
   forgotPassword: (params) => {
      const url = path + '/forgetpassword';
      return axiosClient.post(url, params);
   },
   logout: () => {
      // localStorage.removeItem("authToken");
      console.log(">>> Check domain: ", currentDomain());
      cookies.remove("authToken", {
         path: '/',
         maxAge: 0,
         domain: currentDomain(),
      });
      delete_cookie("authToken")
   },
   refreshToken: (param) => {
      const url = path + '/refreshtoken';
      return axiosClient.post(url, param);
   },
};

export default authApi;