export type FlexDirection = 'column' | 'row' | 'column-reverse'
type AlignItemsTypes =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'baseline'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-evenly'
type JustifyContentTypes =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit'

export type ContainerProps = {
  children?: React.ReactNode | string
  flexdirection?: FlexDirection
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string
  alignitems?: AlignItemsTypes
  justifycontent?: JustifyContentTypes
  background?: ColorTypes
  nopadding?: string
  width?: string | number
  minheight?: string | number
  minwidth?: string | number
  hasshadow?: boolean
  height?: string | number
  borderradius?: string
  margin?: string | any
  padding?: string | number
}
