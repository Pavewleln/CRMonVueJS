<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form @submit.prevent="onSubmitUpdate">
        <div class="input-field">
          <select ref="select" v-model="category">
            <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
          </select>
          <label>Выберите категорию</label>
          <p class="helper-text invalid" v-if="cError">{{cError}}</p>
        </div>

        <div class="input-field">
          <input
            v-model="title"
            id="name"
            type="text"
            @blur="tBlur"
          >
          <label for="name">Название</label>
          <span class="helper-text invalid" v-if="tError">{{ tError }}</span>
        </div>

        <div class="input-field">
          <input
            v-model="limit"
            id="limit"
            type="number"
            @blur="lBlur"
          >
          <label for="limit">Лимит</label>
          <span class="helper-text invalid" v-if="lError">{{ lError }}</span>
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
import {CategoryForm} from "@/hooks/category-form";
import {onMounted, onUnmounted, ref} from "vue";

export default {
  props: ['categories'],
  setup() {
    const select = ref(null)
    onMounted(() => {
      select.value = window.M.FormSelect.init(select.value)
    })
    onUnmounted(() => {
      if (select.value && select.value.destroy) {
        select.value.destroy()
      }
    })
    return {
      ...CategoryForm(),
      select
    }
  }
}
</script>

<style scoped>

</style>
