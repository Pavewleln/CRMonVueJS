import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {useRouter} from "vue-router/dist/vue-router";
import {useStore} from "vuex";

export function LoginForm(){
  const router = useRouter()
  const store = useStore()
  const {handleSubmit, isSubmitting} = useForm()
  const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email',
    yup.string()
      .trim()
      .required('Введите почту')
      .email('Необходимо ввести корректный email')
  )
  const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
    yup.string()
      .trim()
      .required('Введите пароль')
      .min(6, `Пароль не может быть меньше 3 символов`)
  )
  const onsubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      await router.push('/')
    } catch (err) {
      console.log(err)
    }
  })
  return {
    onsubmit,
    password,
    email,
    pError,
    eError,
    eBlur,
    pBlur,
    isSubmitting
  }
}
