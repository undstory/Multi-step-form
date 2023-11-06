import { InputHTMLAttributes } from 'react'

export type InputState = 'active' | 'error' | 'inactive' | 'success'

export type InputProps = {
  helpText?: string | undefined | null
  id: string
  isValid?: boolean
  label: string
  name: string
  onChange: any
  placeholder?: string
  required?: boolean
  state: InputState | undefined | any | void
  type: string
  value: string | null
} & InputHTMLAttributes<HTMLInputElement>
