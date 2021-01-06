import React from "react"
import styled from 'styled-components'

import Container from "../components/container"

const Footer = () => {

    function showCY() {
        const getAllDate = new Date();
        const getY = getAllDate.getFullYear();
        const currentYear = document.getElementById('current_year');
        currentYear.innerHTML = getY;
    }

    return (
        <GlobalFooter>
            <FooterInner>
                <Container>
                    <FooterLink>
                        <a href="https://github.com/haruharu07/jamstack-wordpress" target="_blank" rel="noopener noreferrer">
                            Code
                        </a>
                    </FooterLink>
                    <Copyright>
                        ©︎ <span id="current_year" ref={showCY}></span> Jamstack WordPress
                    </Copyright>
                </Container>
            </FooterInner>
        </GlobalFooter>
    )
}

export default Footer

const GlobalFooter = styled.footer``

const FooterInner = styled.div`
    padding: 20px 0 20px;
    background-color: ${props => props.theme.colors.base};
`

const FooterLink = styled.p`
    text-align: center;
    color: #f8f8f8;
    a {
        text-decoration: underline;
    }
`

const Copyright = styled.p`
    text-align: center;
    color: #f8f8f8;
`