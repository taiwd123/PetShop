import axiosClient from './axiosClient';

const path = '/account';
const pathUser = '/user'

const userApi = {
   getInfo: () => {
      const url = path;
      return axiosClient.get(url);
   },
   updatePassword: (params) => {
      const url = path + '/password';
      return axiosClient.put(url, params);
   },
   updateInfo: (params) => {
      const url = path;
      return axiosClient.put(url, params);
   },
   updateAvatar: (param) => {
      const url = path + '/avatar';
      return axiosClient.put(url, param);
   },

   getAllUsers: (params) => {
      const url = pathUser
      return axiosClient.get(url, { params })
   },
   updateStatus: (email, status) => {
      const url = pathUser + '/status'
      const params = {
         "email": email,
         "status": status
      }
      return axiosClient.put(url, params)
   },
   deleteUserByID: (id) => {
      const url = pathUser + `/${id}`
      return axiosClient.delete(url, id)
   }
};

export default userApi;