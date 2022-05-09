import axiosClient from "./axiosClient"
const path = '/pet'
const petAPI = {
    getAll: (params) => {
        const url = path
        return axiosClient.get(url, { params })
    },
    getPet: (idPet) => {
        const url = path + `/${idPet}`
        return axiosClient.get(url, idPet)
    },
    addPet: (params) => {
        const url = path
        return axiosClient.post(url, params)
    },
    updatePet: (id, params) => {
        const url = path + `/${id}`
        return axiosClient.put(url, params)
    },
    deletePet: (id) => {
        const url = path + `/${id}`
        return axiosClient.delete(url)
    },
    getPetsByCategory: (category, params) => {
        const url = path + `/category/${category}`
        return axiosClient.get(url, params)
    }
}

export default petAPI