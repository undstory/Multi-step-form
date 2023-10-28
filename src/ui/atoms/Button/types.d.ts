type ButtonVariantTypes = 'accent' | 'confirm' | 'transparency'

export type ButtonProps = {
  children: string
  onClick: any
  variant?: ButtonVariantTypes
  margin?: string | number
  marginleft?: string | number
  marginright?: string | number
}
