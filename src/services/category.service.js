import httpService from "@/services/http.service";

export const CategoryService = {
  get: async (uid) => {
    const {data} = await httpService.get(`users/${uid}/categories`)
    return data
  },
  create: async (payload, uid) => {
    const {data} = await httpService.post(`users/${uid}/categories`, payload)
    return data
  },
  update: async (payload, uid) => {
    const {data} = await httpService.patch(`users/${uid}/categories/${payload.id}`, payload)
    return data
  },
  getById: async (uid, id) => {
    const {data} = await httpService.get(`/users/${uid}/categories/${id}`)
    return data
  }
}
