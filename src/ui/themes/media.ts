import { generateMedia } from 'styled-media-query'

// example media queries
export const BREAKPOINT_XS = 375
export const BREAKPOINT_MD = 768
export const BREAKPOINT_XL = 1366
export const BREAKPOINT_XXL = 1925

export const media = generateMedia({
  xs: `${BREAKPOINT_XS}px`,
  md: `${BREAKPOINT_MD}px`,
  xl: `${BREAKPOINT_XL}px`,
  xxl: `${BREAKPOINT_XXL}px`
})
