import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {useStore} from "vuex";
import {MessageToast} from "@/utils/messagePlugin";

export const profileForm = () => {
  const store = useStore()
  const {handleSubmit, isSubmitting} = useForm()
  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name',
    yup.string()
      .trim()
      .required('Введите Имя')
      .min(3, `Имя не может быть меньше 3 символов`)
  )
  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/updateInfoName', values)
      MessageToast('Имя изменено')
    } catch (err) {
      console.log(err)
    }
  })
  name.value = store.getters["auth/info"].name
  return {
    name,
    nError,
    nBlur,
    isSubmitting,
    onSubmit
  }
}
