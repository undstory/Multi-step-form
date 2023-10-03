import styled from 'styled-components'
import Container from '../../ui/atoms/Container'
import { media } from '../../ui/themes/media'

export const MainContainer = styled(Container)`
  ${media.lessThan('t')`
        padding:  50px 30px;
    `}

  ${media.greaterThan('t')`
        padding:  10px;
    `}
`
