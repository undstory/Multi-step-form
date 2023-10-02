import React from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '../../ui/themes/theme'
import GlobalStyles from '../../utils/styles/globals'

export type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
    <ThemeProvider theme={themes}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
)

export default MainLayout;
