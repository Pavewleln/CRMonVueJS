import httpService from "@/services/http.service";

export const RecordService = {
  create: async (payload, uid) => {
    const {data} = await httpService.post(`/users/${uid}/records`, payload)
    return data
  },
  get: async (uid) => {
    const {data} = await httpService.get(`/users/${uid}/records`)
    return data
  },
  getById: async (uid, id) => {
    const {data} = await httpService.get(`/users/${uid}/records/${id}`)
    return data
  }
}
