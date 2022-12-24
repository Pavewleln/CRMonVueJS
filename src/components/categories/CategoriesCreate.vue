<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="onSubmitCreate">
        <div class="input-field">
          <input
            v-model.trim="title"
            id="name"
            type="text"
            @blur="tBlur"
          >
          <label for="name">Название</label>
          <span class="helper-text invalid" v-if="tError">{{ tError }}</span>
        </div>

        <div class="input-field">
          <input
            v-model.number="limit"
            id="limit"
            type="number"
            @blur="lBlur"
          >
          <label for="limit">Лимит</label>
          <span class="helper-text invalid" v-if="lError">{{ lError }}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit" :disabled="isSubmitting">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {CategoryForm} from "@/hooks/category-form";

export default {
  setup() {
    return {
      ...CategoryForm()
    }
  }
}
</script>

<style scoped>

</style>
