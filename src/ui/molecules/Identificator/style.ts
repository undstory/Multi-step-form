import styled, { css } from 'styled-components'
import Container from '../../atoms/Container'
import { IdentyficatorProps } from './types'

export const IdentyficatorWrapper = styled(Container)<IdentyficatorProps>`
  ${({ active }) =>
    active === 'true'
      ? css`
          background-color: ${({ theme: { colors } }) => colors.lightBlue};
          border: 1px solid ${({ theme: { colors } }) => colors.purplishBlue};
        `
      : css`
          border: 1px solid ${({ theme: { colors } }) => colors.magnolia};
        `};
`
