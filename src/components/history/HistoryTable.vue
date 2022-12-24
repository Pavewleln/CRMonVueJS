<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>Сумма</th>
      <th>Дата</th>
      <th>Категория</th>
      <th>Тип</th>
      <th>Открыть</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(r, idx) in records" :key="r.id">
      <td>{{idx + 1}}</td>
      <td>{{ currencyFilter(r.amount) }}</td>
      <td>{{ r.date.toLocaleString() }}</td>
      <td>{{ r.categoryName }}</td>
      <td>
        <span class="white-text badge" :class="[r.typeClass]">{{ r.typeText }}</span>
      </td>
      <td>
        <button class="btn-small btn" @click="$router.push('/record/' + r.id)">
          <i class="material-icons">open_in_new</i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

import currencyFilter from "@/utils/currencyFilter";

export default {
  props: ['records'],
  setup(){
    return{
      currencyFilter
    }
  }
}
</script>

<style scoped>

</style>
