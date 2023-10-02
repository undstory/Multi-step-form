import styled, { css } from 'styled-components'
import { ContainerProps } from './types'

export const ResponsiveContainer = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ background, theme: { colors } }) => colors[background || 'none']};

  border-radius: ${({ borderradius }) => borderradius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minheight }) => minheight};
  min-width: ${({ minwidth }) => minwidth};
  justify-content: ${({ justifycontent }) => justifycontent};
  flex-direction: ${({ flexdirection }) => flexdirection};
  align-items: ${({ alignitems }) => alignitems};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  box-shadow: ${({ hasshadow }) => (hasshadow ? '0px 10px 20px rgba(0, 0, 0, 0.08)' : 'none')};
  gap: ${({ gap }) => gap};

  flex-wrap: ${({ flexWrap }) => flexWrap};

  ${({ nopadding }) =>
    nopadding &&
    css`
      padding: 0;
    `};
`
