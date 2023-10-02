import styled from "styled-components";
import { TextProps } from "./types";

export const TextWrapper = styled.div<TextProps>`
    color: ${({ color, theme: { colors }}) =>
    colors[color  || 'coolGray']
};
    font-size: ${({ size }) => size};
    opacity: ${({ opacity }) => opacity};
    font-weight: ${({ weight, theme: { fonts }}) =>
    fonts[weight || 'regular']
};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
