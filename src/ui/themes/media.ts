import { generateMedia } from 'styled-media-query'

// example media queries
export const BREAKPOINT_MOBILE = 375
export const BREAKPOINT_TABLET = 769
export const BREAKPOINT_DESKTOP_S = 1024
export const BREAKPOINT_DESKTOP_M = 1366
export const BREAKPOINT_DESKTOP_L = 1925

export const media = generateMedia({
  ph: `${BREAKPOINT_MOBILE}px`,
  t: `${BREAKPOINT_TABLET}px`,
  s: `${BREAKPOINT_DESKTOP_S}px`,
  m: `${BREAKPOINT_DESKTOP_M}px`,
  l: `${BREAKPOINT_DESKTOP_L}px`
})
