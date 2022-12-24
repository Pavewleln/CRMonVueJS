<template>
  <form class="card auth-card" @submit.prevent="onsubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model="email"
          :class="{invalid : eError}"
          @blur="eBlur"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="eError">{{ eError }}</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{invalid : pError}"
          @blur="pBlur"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="pError">{{ pError }}</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          v-model="name"
          :class="{invalid : nError}"
          @blur="nBlur"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="nError">{{ nError }}</small>
      </div>
      <div>
        <label>
          <input v-model="agree" type="checkbox"
                 @blur="aBlur"/>
          <span>С правилами согласен</span>
          <p class="helper-text invalid" v-if="aError">{{ aError }}</p>
        </label>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {RegisterForm} from "@/hooks/register-form";

export default {
  setup(){
    return {
      ...RegisterForm()
    }
  }
}
</script>

<style scoped>

</style>
