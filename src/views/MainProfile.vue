<template>
  <div class="app-page">

    <div>
      <div class="page-title">
        <h3>Профиль</h3>
      </div>

      <form class="form" @submit.prevent="onSubmit">
        <div class="input-field">
          <input
            id="description"
            type="text"
            v-model="name"
          >
          <label for="description">Имя</label>
          <span
            class="helper-text invalid" v-if="nError">{{ nError }}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import {profileForm} from "@/hooks/profile-form";
import {onMounted} from "vue";

export default {
  metaTitle:{
    title: 'Profile'
  },
  setup() {
    onMounted(() => {
      window.M.updateTextFields()
    })
    return {
      ...profileForm()
    }
  }
}
</script>

<style scoped>

</style>
