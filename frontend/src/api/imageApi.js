import axiosClient from './axiosClient';

const urlStoreImage = process.env.REACT_APP_API_STOREIMAGE;
console.log(urlStoreImage);

const imageApi = {
   uploadImage: (params) => {
      const url = urlStoreImage;
      return axiosClient.post(url, params, {
         withCredentials: false
      });
   },
};

export default imageApi;