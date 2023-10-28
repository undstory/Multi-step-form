type ButtonVariantTypes = 'accent' | 'confirm' | 'transparency'

export type ButtonProps = {
  children: string
  onClick: any
  variant?: ButtonVariantTypes
  margin?: string | number
  marginLeft?: string | number
  marginRight?: string | number
}
