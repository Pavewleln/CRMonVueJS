import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";

export function RegisterForm (){
  const store = useStore()
  const router = useRouter()
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
  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name',
    yup.string()
      .trim()
      .required('Введите Имя')
      .min(3, `Имя не может быть меньше 3 символов`)
  )
  const {value: agree, errorMessage: aError, handleBlur: aBlur} = useField('agree',
    yup.boolean()
      .required('Вы не согласились с условиями')
  )
  const onsubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/register', values)
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
    isSubmitting,
    name,
    nError,
    nBlur,
    agree,
    aError,
    aBlur
  }
}
