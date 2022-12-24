<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur in currencies" :key="cur" class="currency-line">
          <span>{{ currencyFilter(getCurrency(cur), cur) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import currencyFilter from "@/utils/currencyFilter";

export default {
  props: ['rates'],
  setup(props) {
    const store = useStore()
    const currencies = ref(['RUB', 'USD', 'EUR'])
    const base = computed(() => {
        return store.getters["auth/info"].bill / (props.rates['RUB'] / props.rates['EUR'])
      }
    )
    const getCurrency = (currency) => {
      return Math.floor(base.value * props.rates[currency])
    }
    return {
      currencies,
      getCurrency,
      currencyFilter
    }
  }
}
</script>

<style scoped>

</style>
