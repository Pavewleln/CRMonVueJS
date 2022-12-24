<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggleSidebar')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            ref="dropdown"
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
          >
            {{ name.name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import {useRouter} from "vue-router/dist/vue-router";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

export default {
  emits: ['toggleSidebar'],
  setup() {
    const store = useStore()
    const router = useRouter()
    const dropdown = ref('')
    onMounted(() => {
      window.M.Dropdown.init(dropdown.value, {
        constrainWidth: true
      })
    })
    const logout = () => {
      router.push('/logout')
    }
    const name = computed(() => store.getters['auth/info'])

    const date = new Date().toLocaleDateString()
    return {
      logout,
      date,
      name,
      dropdown
    }
  }
}
</script>

<style scoped>

</style>
