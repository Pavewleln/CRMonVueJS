<template>
  <div>
    Выход из системы
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onMounted} from "vue";
import {useRouter} from "vue-router/dist/vue-router";

export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    onMounted(() => {
      store.commit('auth/logout')
      router.push('/login?message=logout')
    })

  }
}
</script>

<style scoped>

</style>e
