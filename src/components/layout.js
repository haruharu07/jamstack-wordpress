import React from "react"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import responsive from '../styles/responsive'

import Header from "./header"
import Footer from "./footer"


const Layout = ({children, location}) => {

    const rootPath = `${__PATH_PREFIX__}/`

    let content;
    if(location.pathname === rootPath) {
        content = <ContentHome><main>{children}</main></ContentHome>
    } else {
        content = <ContentPage><main>{children}</main></ContentPage>
    }

    return (
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        <Header location={location} />
        {content}
        <Footer />
        </>
        </ThemeProvider>
    )
}

export default Layout

const ContentHome = styled.div`
    min-height: 120vh;
    margin: 50px 0 120px;
    ${responsive.md} {
            margin: 28px 0 100px;
    }
`

const ContentPage = styled.div`
    min-height: 120vh;
    margin: 50px 0 100px;
    ${responsive.md} {
            margin: 28px 0 100px;
    }
`