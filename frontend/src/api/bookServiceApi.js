import axiosClient from "./axiosClient"

const path = '/booking'
const bookServiceAPI = {
    findByUser: (params) => {
        const url = path + '/find/user'
        return axiosClient.get(url, { params })
    },
    getByIdBooking: (id) => {
        const url = path + `/${id}`
        return axiosClient.get(url)
    },
    getAllBooking: (params) => {
        return axiosClient.get(path, { params })
    },
    updateBookingService: (id, params) => {
        const url = path + `/${id}`
        return axiosClient.put(url, params)
    },
    adminAddBooking: (params) => {
        const url = path + '/admin'
        return axiosClient.post(url, params)
    },
    addminUpdateBooking: (id, params) => {
        const url = path + `/admin/${id}`
        return axiosClient.put(url, params)
    }
}
export default bookServiceAPI