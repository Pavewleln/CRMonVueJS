<template>
  <div>
    <AppLoader v-if="loading"/>
    <div v-else class="app-main-layout">
      <TheNavbar @toggleSidebar="sidebarState = !sidebarState"/>
      <TheSidebar :value="sidebarState"/>

      <main class="app-content" :class="{full: !sidebarState}">
        <router-view/>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import TheSidebar from "@/components/app/TheSidebar";
import TheNavbar from "@/components/app/TheNavbar";
import AppLoader from "@/components/app/AppLoader";
import {useStore} from "vuex";

export default {
  components: {AppLoader, TheNavbar, TheSidebar},
  setup() {
    const store = useStore()
    const sidebarState = ref(true)
    const loading = ref(true)
    onMounted(async () => {
      await store.dispatch('auth/authMe')
      if(store.getters["auth/info"]){
        loading.value = false
      }
    })
    return{
      sidebarState,
      loading
    }
  }
}
</script>

<style scoped>

</style>
