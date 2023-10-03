import { Colors } from './colors'

export type ThemeBasicTypes = {
  colors: Colors
  fonts: Font
}

export type ThemeType = ThemeBasicType & {
  mediaQueries: MediaQueries
}
