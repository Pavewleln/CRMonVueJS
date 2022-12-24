import httpService from "@/services/http.service";
import {localStorageService} from "@/services/localStorage.service";

const usersEndPoint = 'users/'
export const UserService = {
  create: async (payload) => {
    const {data} = await httpService.put(
      usersEndPoint + payload._id + '/info',
      payload
    );
    return data;
  },
  authMe: async () => {
    const {data} = await httpService.get(usersEndPoint + localStorageService.getUserId() + '/info');
    return data;
  },
  updateBill: async (uid, bill) => {
    await httpService.patch(`users/${uid}/info`, bill)
  },
  updateName: async (uid, name) => {
    await httpService.patch(`users/${uid}/info`, name)
  },
}
