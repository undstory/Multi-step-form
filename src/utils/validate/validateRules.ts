import { isDataView } from 'util/types'

export type ErrorsTypes = {
  email: string | null
  userName: string | null
  phone: string | null
}

const RegexRules = {
  email: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  userName: /^[a-zA-Z ]{2,30}$/,
  phone: /^([+]\d{2})?[. ]?([0-9]{3})[. ]?([0-9]{3})[. ]?([0-9]{3})$/
}

export const validate = (data: any) => {
  const errors: any = {}

  if (data.userName !== '' && !RegexRules.userName.test(data.userName)) {
    errors.userName = 'This is not a valid format for name'
  }

  if (data.email !== '' && !RegexRules.email.test(data.email)) {
    errors.email = 'This is not a valid format for email'
  }

  if (data.phone !== '' && !RegexRules.phone.test(data.phone)) {
    errors.phone = 'This is not a valid format for phone'
  }

  return errors
}
