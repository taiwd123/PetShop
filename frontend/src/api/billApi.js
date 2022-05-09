import axiosClient from "./axiosClient"

const path = ''
const billAPI = {
    addBill: (params) => {
        const url = path + "/bill"
        return axiosClient.post(url, params)
    },
    getBills: (params) => {
        const url = path + '/bill'
        return axiosClient.get(url, { params })
    },
    getBillsByUsername: (params) => {
        const url = path + '/bill'
        return axiosClient.get(url, { params })
    },
    getBilById: (idBill) => {
        const url = path + `/bill/${idBill}`
        return axiosClient.get(url, idBill)
    }
}
export default billAPI