import styled from 'styled-components'
import { TextProps } from './types'

export const TextWrapper = styled.div<TextProps>`
  color: ${({ color, theme: { colors } }) => colors[color || 'coolGray']};
  font-size: ${({ size }) => size};
  line-height: 1.4;
  margin-top: ${({ margintop }) => margintop};
  margin-bottom: ${({ marginbottom }) => marginbottom};
  margin-left: ${({ marginleft }) => marginleft};
  margin-right: ${({ marginright }) => marginright};
  padding-bottom: ${({ paddingbottom }) => paddingbottom};
  padding-top: ${({ paddingtop }) => paddingtop};
  padding-left: ${({ paddingleft }) => paddingleft};
  padding-right: ${({ paddingright }) => paddingright};
  opacity: ${({ opacity }) => opacity};
  font-weight: ${({ weight, theme: { fonts } }) => fonts[weight || 'regular']};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`
