<template>
  <form class="card auth-card" @submit.prevent="onsubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          v-model.trim="email"
          id="email"
          type="text"
          :class="{invalid : eError}"
          @blur="eBlur"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="eError">{{ eError }}</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="password"
          id="password"
          type="password"
          :class="{invalid : pError}"
          @blur="pBlur"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="pError">{{ pError }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          :disabled="isSubmitting"
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {LoginForm} from "@/hooks/login-form";
import {onMounted} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import {MessageToast} from "@/utils/messagePlugin";
import messages from "@/utils/messages";

export default {
  setup() {
    const route = useRoute()
    onMounted(() => {
      if (route.query.message) {
        MessageToast(messages[route.query.message])
      }
    })
    return {
      ...LoginForm()
    }
  }
}
</script>

<style scoped>

</style>
