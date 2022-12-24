<template>
  <div class="app-page">
    <AppLoader v-if="loading"/>
    <div v-else-if="record">
      <div>
        <div class="breadcrumb-wrap">
          <router-link to="/history" class="breadcrumb">История</router-link>
          <a class="breadcrumb">
            {{ record.type === 'income' ? 'Доход' : 'Расход' }}
          </a>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <div class="card" :class="{
              'red': record.type === 'outcome',
              'green': record.type === 'income'
            }">
              <div class="card-content white-text">
                <p>Описание: {{ record.description }}</p>
                <p>Сумма: {{ currencyFilter(record.amount) }}</p>
                <p>Категория: {{ record.categoryName }}</p>

                <small>{{ record.date }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Такой записи нет</p>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router/dist/vue-router";
import AppLoader from "@/components/app/AppLoader";
import currencyFilter from "@/utils/currencyFilter";

export default {
  components: {AppLoader},
  setup() {
    const store = useStore()
    const route = useRoute()
    const loading = ref(true)
    const record = ref(null)
    onMounted(async () => {
      const id = route.params.id
      const oneRecord = await store.dispatch('record/getRecordById', id)
      const category = await store.dispatch('category/getCategoryById', oneRecord.categoryId)
      record.value = {
        ...oneRecord,
        categoryName: category.title
      }
      loading.value = false
    })

    return {
      record,
      loading,
      currencyFilter
    }
  }
}
</script>

<style scoped>

</style>
