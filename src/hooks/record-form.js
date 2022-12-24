import {useField, useForm} from "vee-validate";
import * as yup from "yup";

export const RecordForm = (fn, categories) => {
  const {handleSubmit, isSubmitting} = useForm()

  const {value: type} = useField('type')
  type.value = 'income'
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount',
    yup.number()
      .min(1, 'Число должно быть больше 1')
      .required('Обязательно для заполнения')
  )
  const {value: description, errorMessage: dError, handleBlur: dBlur} = useField('description',
    yup.string()
      .trim()
      .required('Обязательно для заполнения')
  )
  const {value: category, errorMessage: cError} = useField('category',
    yup.string()
      .required('Обязательно для заполнения')
  )
  category.value = categories[0]

  const onSubmit = handleSubmit(fn)

  return {
    isSubmitting,
    type,
    amount,
    dError,
    dBlur,
    onSubmit,
    category,
    aError,
    aBlur,
    description,
    cError
  }
}
