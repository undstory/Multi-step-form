import { JsxElement } from 'typescript'
import { FontWeightTypes } from '../../../utils/models/fonts'

export type TextProps = {
  children: React.ReactNode | string | number | JsxElement
  color?: ColorTypes
  size: string
  weight?: FontWeightTypes
  opacity?: number
  letterSpacing?: string
  paddingtop?: string
  paddingbottom?: string
  paddingleft?: string
  paddingright?: string
  margintop?: string
  marginbottom?: string
  marginleft?: string
  marginright?: string
}
