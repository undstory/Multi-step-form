import styled from 'styled-components'
import Container from '../../ui/atoms/Container'
import { media } from '../../ui/themes/media'

export const MainContainer = styled(Container)`
  ${media.lessThan('t')`
        padding:  30px 20px;
        position: absolute;
        top: 95px;
        margin: 0 20px;
    `}

  ${media.greaterThan('t')`
        padding:  10px;
    `}
`
