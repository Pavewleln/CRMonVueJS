import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {useStore} from "vuex";

export const CategoryForm = () => {
  const store = useStore()
  const {handleSubmit, isSubmitting} = useForm({

  })
  const {value: title, errorMessage: tError, handleBlur: tBlur} = useField('title',
    yup.string()
      .trim()
      .required('Обязательно для заполнения')
      .min(3, 'Название должно быть больше 3 символов')
  )
  const {value: limit, errorMessage: lError, handleBlur: lBlur} = useField('limit',
    yup.number()
      .min(1, 'Число должно быть больше 1')
      .required('Обязательно для заполнения')
  )
  const {value: category, errorMessage: cError} = useField('category',
    yup.string()
      .required('Обязательно для заполнения'))

  const onSubmitCreate = handleSubmit(async (values) => {
    try {
      await store.dispatch('category/createCategory', {
        title: values.title,
        limit: values.limit
      })
      title.value = null
      limit.value = null
    } catch (err) {
      console.log(err)
    }
  })
  const onSubmitUpdate = handleSubmit(async (values) => {
    const categoryData = {
      id: values.category,
      title: values.title,
      limit: values.limit
    }
    try {
      await store.dispatch('category/updateCategory', categoryData)
      title.value = null
      limit.value = null
      category.value = null
    } catch (err) {
      console.log(err)
    }
  })

  return {
    isSubmitting,
    title,
    limit,
    tError,
    lError,
    tBlur,
    lBlur,
    onSubmitCreate,
    onSubmitUpdate,
    category,
    cError
  }
}
