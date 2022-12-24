import {createStore} from 'vuex'
import auth from "./modules/auth.module";
import category from "./modules/category.module";
import record from "./modules/record.module";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchCurrency() {
      let myHeaders = new Headers();
      myHeaders.append("apikey", "c0EDmLIaemQc9pHypkU6hWuZ18DXKsvt");

      let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      const res = await fetch("https://api.apilayer.com/fixer/latest?symbols=USD,RUB,EUR", requestOptions)
      return await res.json()
    }
  },
  modules: {
    auth,
    category,
    record
  }
})
