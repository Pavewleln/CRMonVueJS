<template>
  <div class="app-page">


    <div>
      <div class="page-title">
        <h3>Планирование</h3>
        <h4>{{ currencyFilter(bill) }}</h4>
      </div>
      <AppLoader v-if="loading"/>
      <p class="center" v-else-if="!categories">Категорий пока нет.
        <router-link to="/categories">Добавить категорию</router-link>
      </p>
      <p class="center" v-else-if="!records">Записей пока нет.
        <router-link to="/record">Добавить запись</router-link>
      </p>
      <section v-else>
        <div v-for="cat in categories" :key="cat.id">
          <p>
            <strong>{{ cat.title }}:</strong>
            {{ currencyFilter(cat.spend) }} из {{ currencyFilter(cat.limit) }}
          </p>
          <div class="progress">
            <div
              class="determinate"
              :class="[cat.progressColor]"
              :style="{width: cat.progressPercent + '%'}"
            ></div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import AppLoader from "@/components/app/AppLoader";
import currencyFilter from "@/utils/currencyFilter"

export default {
  components: {AppLoader},
  setup() {
    const store = useStore()
    const bill = computed(() => store.getters['auth/info'].bill)
    const loading = ref(false)
    const categories = ref([])
    const records = ref([])
    onMounted(async () => {
      loading.value = true
      records.value = await store.dispatch('record/getAllRecords')
      const category = await store.dispatch('category/getAllCategory')
      if (category && records.value) {
        categories.value = category.map(cat => {
          const spend = records.value
            .filter(r => r.categoryId === cat.id)
            .filter(r => r.type === 'outcome')
            .reduce((total, record) => {
              return total += +record.amount
            }, 0)
          const percent = 100 * spend / cat.limit
          const progressPercent = percent > 100 ? 100 : percent
          const progressColor = percent < 60
            ? 'green'
            : percent < 100
              ? 'yellow'
              : 'red'
          return {
            ...cat,
            progressPercent,
            progressColor,
            spend
          }
        })
      } else {
        categories.value = category
      }
      loading.value = false
    })
    return {
      loading,
      categories,
      bill,
      currencyFilter,
      records
    }
  }
}
</script>

<style scoped>

</style>
