<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="cur in currencies" :key="cur">
            <td>{{cur}}</td>
            <td>{{ rates[cur].toFixed(2) }}</td>
            <td>{{ date }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  props: ['date', 'rates'],
  setup() {
    const currencies = ref(['RUB', 'USD', 'EUR'])
    return {
      currencies
    }
  }
}
</script>

<style scoped>

</style>
