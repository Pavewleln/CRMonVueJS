<template>
  <div class="app-page">
    <div>
      <div class="page-title">
        <h3>Новая запись</h3>
      </div>

      <AppLoader v-if="loading"/>
      <p class="center" v-else-if="!categories.length">Категорий пока нет.
        <router-link to="/categories">Добавить категорию</router-link>
      </p>
      <form class="form" v-else @submit.prevent="onSubmit">
        <div class="input-field">
          <select ref="select" v-model="category">
            <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
          </select>
          <label>Выберите категорию</label>
          <p class="helper-text invalid" v-if="cError">{{cError}}</p>
        </div>

        <p>
          <label>
            <input
              checked
              class="with-gap"
              name="type"
              type="radio"
              value="income"
              v-model="type"
            />
            <span>Доход</span>
          </label>
        </p>

        <p>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              value="outcome"
              v-model="type"
            />
            <span>Расход</span>
          </label>
        </p>

        <div class="input-field">
          <input
            id="amount"
            type="number"
            v-model="amount"
            @blur="aBlur"
          >
          <label for="amount">Сумма</label>
          <span class="helper-text invalid" v-if="aError">{{ aError }}</span>
        </div>

        <div class="input-field">
          <input
            id="description"
            type="text"
            v-model="description"
            @blur="dBlur"
          >
          <label for="description">Описание</label>
          <span
            class="helper-text invalid" v-if="dError">{{ dError }}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useStore} from "vuex";
import AppLoader from "@/components/app/AppLoader";
import {RecordForm} from "@/hooks/record-form";
import {MessageToast} from "@/utils/messagePlugin";

export default {
  components: {AppLoader},
  setup: function () {
    const select = ref(null)
    const loading = ref(true)
    const store = useStore()
    onMounted(async () => {
      loading.value = true
      await store.dispatch('category/getAllCategory')
      loading.value = false
      setTimeout(() => {
        select.value = window.M.FormSelect.init(select.value)
      }, 0)
    })
    const categories = computed(() => store.getters["category/category"])
    onUnmounted(() => {
      if (select.value && select.value.destroy) {
        select.value.destroy()
      }
    })

    const onSubmit = async  (values) => {
      if (values.type === 'income') {
        try{
          await store.dispatch('record/createRecord', {
            categoryId: values.category,
            amount: values.amount,
            description: values.description,
            type: values.type,
            date: new Date().toJSON()
          })
          const bill = store.getters['auth/info'].bill + values.amount
          await store.dispatch('auth/updateInfo', {bill})
          values = null
          MessageToast('Запись успешно создана')
        } catch (err){
          console.log(err)
        }
      } else {
        if(store.getters["auth/info"].bill >= values.amount){
          try {
            await store.dispatch('record/createRecord', {
              categoryId: values.category,
              amount: values.amount,
              description: values.description,
              type: values.type,
              date: new Date().toJSON()
            })
            const bill = store.getters['auth/info'].bill - values.amount
            await store.dispatch('auth/updateInfo', {bill})
            values.amount = ''
            values.description = ''
            MessageToast('Запись успешно создана')
          } catch (err){
            console.log(err)
          }
        }else {
          MessageToast('У вас не достаточно средств')
        }
      }
    }
    return {
      select,
      categories,
      loading,
      ...RecordForm(onSubmit, categories)
    }
  }
}
</script>

<style scoped>

</style>
