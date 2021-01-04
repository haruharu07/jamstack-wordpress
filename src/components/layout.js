import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from "./header"

const Layout = props => {
    const { location, children } = props
    return (
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        <Header location={location} />
        <main>
            {children}
        </main>
        </>
        </ThemeProvider>
    )
}

export default Layout
