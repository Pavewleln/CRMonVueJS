<template>
  <div>
    <component :is="layout + '-layout'" v-if="layout"/>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import {computed} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  components: {AuthLayout, MainLayout},
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
