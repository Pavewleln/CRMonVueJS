<template>
  <div class="app-page">

    <div>
      <div class="page-title">
        <h3>Категории</h3>
      </div>
      <AppLoader v-if="loading"/>
      <section v-else>
        <div class="row">
          <CategoriesCreate/>
          <CategoriesUpdate v-if="categories.length > 0" :categories="categories"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CategoriesCreate from "@/components/categories/CategoriesCreate";
import CategoriesUpdate from "@/components/categories/CategoriesUpdate";
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import AppLoader from "@/components/app/AppLoader";

export default {
  components: {AppLoader, CategoriesUpdate, CategoriesCreate},
  setup() {
    const loading = ref(true)
    const store = useStore()
    onMounted(async () => {
      loading.value = true
      await store.dispatch('category/getAllCategory')
      loading.value = false
    })
    const categories = computed(() => store.getters["category/category"])
    return {
      categories,
      loading
    }
  }
}
</script>

<style scoped>

</style>
