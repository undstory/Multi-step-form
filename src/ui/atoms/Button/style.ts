import styled from 'styled-components'
import { media } from '../../themes/media'

export const CustomButton = styled.button`
  ${media.lessThan('t')`
        padding:  10px;
        background-color: red;
    `}
`
