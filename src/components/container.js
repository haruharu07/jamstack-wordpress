import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'
import responsive from '../styles/responsive'

const Container = ({ children }) => {
    return <IndexContent>{ children }</IndexContent>
}

export default Container

const IndexContent = styled.div`
    max-width: ${props => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 5rem;
    position: relative;
    ${responsive.xlg} {
        padding: 0 3rem;
    }
    ${responsive.md} {
        padding: 0 2rem;
    }
`