import styled, { css } from 'styled-components'
import { media } from '../../themes/media'
import { TextProps } from '../Text/types'
import { ButtonProps } from './types'

export const CustomButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  font-size: 12px;
  padding: 10px 12px;
  border-radius: 5px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium};
  min-width: 80px;

  ${({ variant }) =>
    variant === 'accent' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.marineBlue};
      color: ${({ theme: { colors } }) => colors.magnolia};
      margin-left: auto;
    `};

  ${({ variant }) =>
    variant === 'confirm' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.purplishBlue};
      color: ${({ theme: { colors } }) => colors.magnolia};
    `};

  ${({ variant }) =>
    variant === 'transparency' &&
    css`
      background-color: transparent;
      color: ${({ theme: { colors } }) => colors.marineBlue};
    `};
`
