import React from 'react';
import { ResponsiveContainer } from './style';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = (props) => {
    const { children, ...rest } = props
    return (
        <ResponsiveContainer
            {...rest}
        >
            {children}
        </ResponsiveContainer>
    )
}
export default Container;
