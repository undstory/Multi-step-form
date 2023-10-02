import styled from "styled-components";
import Container from "../../ui/atoms/Container";
import { ContainerProps } from "../../ui/atoms/Container/types";
import stepSvgUrl from "../../assets/images/bg-sidebar-desktop.svg"


export const SidebarWrapper = styled(Container)`
    background-image: url(${stepSvgUrl});
    background-repeat:  no-repeat;
    background-position:  0 0;
    background-size: contain;
    flex-basis: 33.33%;
`;
