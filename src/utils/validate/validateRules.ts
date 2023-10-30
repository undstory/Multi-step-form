export const RegexTypes = {
  EMAIL: 'email',
  NAME: 'name',
  PHONE: 'phone'
}

const RegexRules: { [key: string]: any } = {
  [RegexTypes.EMAIL]: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  [RegexTypes.NAME]: /^[a-zA-Z ]{2,30}$/,
  [RegexTypes.PHONE]: /^([+]\d{2})?[. ]?([0-9]{3})[. ]?([0-9]{3})[. ]?([0-9]{3})$/
}

export const validate = (type: any, data: any) => {
  if (type && data) {
    return new RegExp(RegexRules[type])?.test(data)
  }
  return false
}
