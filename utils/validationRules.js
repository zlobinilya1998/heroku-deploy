export const minLength = v => v.length <= 10 || `Поле не может превышать 10 символов`
export const required = v => v.length > 0 || `Поле обязательно к заполнению`
