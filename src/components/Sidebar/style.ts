import styled from 'styled-components'
import Container from '../../ui/atoms/Container'
import stepSvgUrlDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import stepSvgUrlMobile from '../../assets/images/bg-sidebar-mobile.svg'
import { media } from '../../ui/themes/media'

export const SidebarWrapper = styled(Container)`
  ${media.greaterThan('t')`
        background-image: url(${stepSvgUrlDesktop});
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;
        flex-basis: 33.33%;
    `}
  ${media.lessThan('t')`
        background-image: url(${stepSvgUrlMobile});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        justify-content: center;
        align-items: start;
        height: 150px;
    `}
`
