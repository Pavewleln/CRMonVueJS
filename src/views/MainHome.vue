<template>
  <div class="app-page">

    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <button class="btn waves-effect waves-light btn-small" @click="refresh">
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <AppLoader v-if="loading"/>
      <div class="row" v-else>
        <HomeBill :rates="currency.rates"/>
        <HomeCurrency :rates="currency.rates" :date="currency.date"/>
      </div>
    </div>

  </div>
</template>

<script>
import HomeCurrency from "@/components/home/HomeCurrency";
import HomeBill from "@/components/home/HomeBill";
import AppLoader from "@/components/app/AppLoader";
import {onMounted, ref} from "vue";

export default {
  name: 'HomeView',
  components: {AppLoader, HomeBill, HomeCurrency},
  setup() {
    // const store = useStore()
    const loading = ref(true)
    const currency = ref(null)
    const refresh = () => {
      loading.value = true
      // currency.value = await store.dispatch('fetchCurrency')
      currency.value = {
        base: "EUR",
        date: "2022-12-23",
        rates: {
          EUR: 1,
          RUB: 73.838176,
          USD: 1.062575
        }
      }
      setTimeout(() => {
        loading.value = false
      }, 500)
    }
    onMounted(() => {
      // currency.value = await store.dispatch('fetchCurrency')
      currency.value = {
        base: "EUR",
        date: "2022-12-23",
        rates: {
          EUR: 1,
          RUB: 73.838176,
          USD: 1.062575
        }
      }
      loading.value = false
    })
    return {
      loading,
      currency,
      refresh
    }
  },

}
</script>
