import {ErrorToast} from "@/utils/messagePlugin";
import {localStorageService} from "@/services/localStorage.service";
import {RecordService} from "@/services/record.service";

export default {
  namespaced: true,
  state() {
    return {
      records: []
    }
  },
  mutations: {
    setRecord(state, payload) {
      state.records.push(payload)
    },
    setAllRecords(state, payload) {
      state.records = payload
    }
  },
  actions: {
    async createRecord({commit}, payload) {
      try {
        const uid = localStorageService.getUserId()
        const record = await RecordService.create(payload, uid)
        commit('setRecord', {...payload, id: record.name})
      } catch (err) {
        ErrorToast('Не удалось создать запись')
        throw err
      }
    },
    async getAllRecords({commit}) {
      try {
        const uid = localStorageService.getUserId()
        const data = await RecordService.get(uid)
        if (data) {
          const records = Object.keys(data).map((id) => ({
            id,
            ...data[id]
          }))
          commit('setAllRecords', records)
          return records
        }
      } catch (err) {
        ErrorToast('Не удалось загрузить данные')
        throw err
      }
    },
    async getRecordById(_, id){
      try {
        const uid = localStorageService.getUserId()
        const record = await RecordService.getById(uid, id)
        if (record) {
          return {...record, id}
        }
      } catch (err) {
        ErrorToast('Не удалось загрузить данные')
        throw err
      }
    }
  }
}
