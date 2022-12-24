<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <li>
      <router-link to="/" class="waves-effect waves-orange pointer">Счет</router-link>
    </li>
    <li>
      <router-link to="/history" class="waves-effect waves-orange pointer">История</router-link>
    </li>
    <li>
      <router-link to="/planning" class="waves-effect waves-orange pointer">Планирование</router-link>
    </li>
    <li>
      <router-link to="/record" class="waves-effect waves-orange pointer">Новая запись</router-link>
    </li>
    <li>
      <router-link to="/categories" class="waves-effect waves-orange pointer">Категории</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props:['value']
}
</script>

<style scoped>

</style>
