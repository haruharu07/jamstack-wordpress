import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({location}) => {

    const rootPath = `${__PATH_PREFIX__}/`
    const logoLink = (
        <Link to="/">
            Jamstack WordPress
        </Link>
    )

    let logo;
    if (location.pathname === rootPath) {
        logo = <LogoTop className="logo">{logoLink}</LogoTop>
    } else {
        logo = <LogoPage className="logo">{logoLink}</LogoPage>
    }

    function hH() {
        let hHeight = document.querySelector('.header-fixed').clientHeight
        document.querySelector('.header').style.height = hHeight + "px"
    }


    return (
        <GlobalHeader className="header">
            <HeaderInner className="header-fixed" ref={hH}>
                {logo}
            </HeaderInner>
        </GlobalHeader>
    )
}

export default Header

const GlobalHeader = styled.header``

const HeaderInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.12);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`

const LogoTop = styled.h1`
    font-size: 18px;
    letter-spacing: 0.08em;
`

const LogoPage = styled.p`
    font-size: 18px;
    letter-spacing: 0.08em;
`