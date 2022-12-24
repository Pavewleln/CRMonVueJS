<template>
  <div class="app-page">
    <p class="center" v-if="!records.length">Записей пока нет.
      <router-link to="/record">Добавить запись</router-link>
    </p>
    <AppLoader v-else-if="loading"/>
    <div v-else>
      <div class="page-title">
        <h3>История записей</h3>
      </div>
      <HistoryTable :records="records"/>
    </div>

  </div>
</template>

<script>
import HistoryTable from "@/components/history/HistoryTable";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import AppLoader from "@/components/app/AppLoader";

export default {
  components: {AppLoader, HistoryTable},
  setup() {
    const store = useStore()
    const loading = ref(true)
    const records = ref([])
    const categories = ref([])
    onMounted(async () => {
      const allRecords = await store.dispatch('record/getAllRecords')
      categories.value = await store.dispatch('category/getAllCategory')
      if(allRecords){
        records.value = allRecords.map(record => {
          return {
            ...record,
            categoryName: categories.value.find(c => c.id === record.categoryId).title,
            typeClass: record.type === 'income' ? 'green' : 'red',
            typeText: record.type === 'income' ? 'Доход' : 'Расход'
          }
        })
      }
      loading.value = false
    })
    return {
      loading,
      records,
      categories
    }
  }
}
</script>

<style scoped>

</style>
