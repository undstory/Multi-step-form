import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const CustomButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  font-size: 12px;
  padding: 10px 12px;
  border-radius: 5px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium};
  min-width: 80px;
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};

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
      margin-left: auto;
    `};

  ${({ variant }) =>
    variant === 'transparency' &&
    css`
      background-color: transparent;
      color: ${({ theme: { colors } }) => colors.marineBlue};
    `};
`
