import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Main = styled.main`
    margin: 0 auto;
    width: 80%;
    // TODO: add device breakpoints
    max-width: 1200px;
`

function Layout({ children }) {
    return (
        <ThemeProvider>
            <CSSReset />
            <Main>{children}</Main>
        </ThemeProvider>
    )
}

export default Layout
