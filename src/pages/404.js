import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const NotFoundPage = ({location}) => (
    <Layout location={location}>
        <SEO title="404: Not found" />

        <Container>
            <h1>404: Not Found</h1>
        </Container>
    </Layout>
)

export default NotFoundPage
