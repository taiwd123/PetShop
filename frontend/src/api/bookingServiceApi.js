import axiosClient from "./axiosClient";

const path = '/booking';

const bookingServiceApi = {
   addNewBookingService: (params) => {
      return axiosClient.post(path, params);
   },
   addNewBookingServices: (params) => {
      const url = path + '/list';
      return axiosClient.post(url, params);
   }
};

export default bookingServiceApi;