import {ErrorToast, MessageToast} from "@/utils/messagePlugin";
import {localStorageService} from "@/services/localStorage.service";
import {CategoryService} from "@/services/category.service";
import messages from "@/utils/messages";

export default {
  namespaced: true,
  state() {
    return {
      category: []
    }
  },
  mutations: {
    setCategory(state, payload) {
      state.category.push(payload)
    },
    loadCategory(state, payload) {
      state.category = payload
    },
    updateMessage(state, payload) {
      state.category[state.category.findIndex((c) => c.id === payload.id)] = payload
    }
  },
  actions: {
    async createCategory({commit}, payload) {
      try {
        const uid = localStorageService.getUserId()
        const category = await CategoryService.create(payload, uid)
        commit('setCategory', {...payload, id: category.name})
        MessageToast('Категория успешно создана')
      } catch (err) {
        ErrorToast(messages(err))
        throw err
      }
    },
    async getAllCategory({commit}) {
      try {
        const uid = localStorageService.getUserId()
        const data = await CategoryService.get(uid)
        if (data) {
          const category = Object.keys(data).map((id) => ({
            id,
            ...data[id]
          }))
          commit('loadCategory', category)
          return category
        }
      } catch (err) {
        ErrorToast('Не удалось загрузить категории')
        throw err
      }
    },
    async updateCategory({commit}, payload) {
      try {
        const uid = localStorageService.getUserId()
        const category = await CategoryService.update(payload, uid)
        if (category) {
          commit('updateMessage', category)
          MessageToast('Категория успешно изменена')
        }
      } catch (err) {
        ErrorToast('Не удалось изменить категорию')
        throw err
      }
    },
    async getCategoryById(_, id) {
      try {
        const uid = localStorageService.getUserId()
        const category = await CategoryService.getById(uid, id)
        if (category) {
          return {...category, id}
        }
      } catch (err) {
        ErrorToast('Не удалось загрузить данные')
        throw err
      }
    }
  },
  getters: {
    category(state) {
      return state.category
    }
  }
}
