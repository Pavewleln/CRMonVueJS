export function MessageToast (html) {
  window.M.toast({html})
}

export function ErrorToast (html) {
  window.M.toast({html: `Ошибка: ${html}`})
}
