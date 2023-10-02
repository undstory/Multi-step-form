import styled from "styled-components";
import Container from "../../ui/atoms/Container";
import { media } from "../../ui/themes/media";

export const MainContainer = styled(Container)`
      ${media.lessThan('md')`
        padding:  50px 30px;
    `}

    ${media.greaterThan('md')`
        padding:  10px;
    `}
`;
