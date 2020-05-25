import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { COLORS } from './colors'

const Main = styled.main`
    margin-left: auto;
    margin-right: auto;
    max-width: 49rem;
    padding: 2.625rem 1.3125rem;
`

const Nav = styled.nav`
    min-height: 60px;
    height: 60px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(28, 28, 37, 0.95);
    font-size: 16px;
    line-height: 1.5;
`

const Header = styled.h1`
    background: linear-gradient(90deg, ${COLORS.BLUE}, ${COLORS.YELLOW} 50%, ${COLORS.PURPLE});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.5;
`

const Icon = styled.span`
    font-size: 20px;
    margin-right: 5px;
`

function Layout({ children }) {
    return (
        <ThemeProvider>
            <CSSReset />
            <Nav>
                <Icon>
                    <span aria-label="space" role="img">
                        🚀
                    </span>
                </Icon>{' '}
                <Header>The Naluri Space Project</Header>
            </Nav>
            <Main>{children}</Main>
        </ThemeProvider>
    )
}

export default Layout
