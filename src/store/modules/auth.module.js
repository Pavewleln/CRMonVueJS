import {ErrorToast, MessageToast} from "@/utils/messagePlugin";
import messages from "@/utils/messages";
import {authService} from "@/services/auth.service";
import {UserService} from "@/services/users.service";
import {localStorageService} from "@/services/localStorage.service";

const TOKEN_KEY = 'jwt-token'
const USERID_KEY = "user-local-id";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorageService.getAccessToken(),
      userId: localStorageService.getUserId(),
      auth: {}
    }
  },
  mutations: {
    setToken(state, data) {
      state.token = data.idToken
      state.userId = data.localId
      localStorage.setItem(USERID_KEY, data.localId)
      localStorage.setItem(TOKEN_KEY, data.idToken)
    },
    logout(state) {
      state.token = null
      state.auth = null
      localStorageService.removeAuthData()
    },
    setAuth(state, payload) {
      state.auth = payload
    }
  },
  actions: {
    async login({commit}, payload) {
      try {
        const data = await authService.login(payload)
        commit('setToken', data)
        MessageToast('Вы вошли в систему')
      } catch (err) {
        ErrorToast(messages[err.response.data.error.message])
        throw err
      }
    },
    async register({commit}, payload) {
      try {
        //register
        const data = await authService.register(payload)
        const userId = data.localId

        commit('setToken', data)
        //createUser
        const user = {
          _id: userId,
          bill: 10000,
          ...payload
        }
        const info = await UserService.create(user);
        commit('setAuth', info)
        MessageToast('Вы вошли в систему')
      } catch (err) {
        ErrorToast(messages[err.response.data.error.message])
        throw err
      }
    },
    async authMe({commit}) {
      const data = await UserService.authMe()
      commit('setAuth', data)
    },
    async updateInfo({commit, getters}, bill){
      try{
        const uid = localStorageService.getUserId()
        const updateData = {...getters.info, ...bill}
        await UserService.updateBill(uid, updateData)
        commit('setAuth', updateData)
      } catch (err){
        ErrorToast(err)
      }
    },
    async updateInfoName({commit, getters}, name) {
      try{
        const uid = localStorageService.getUserId()
        const updateData = {...getters.info, ...name}
        await UserService.updateName(uid, updateData)
        commit('setAuth', updateData)
      } catch (err){
        ErrorToast(err)
      }
    }
  },
  getters: {
    info(state) {
      return state.auth
    },
    userId(state) {
      return state.userId
    },
    isAuthenticated(state) {
      return !!state.token
    }
  }
}
