import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const BlogPost = ({location, data}) => {
    const post = data.wpPost
    return(
        <Layout location={location}>
            <SEO title={post.title} />

            <Container>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Container>

        </Layout>
    )
}

export default BlogPost

export const query = graphql`
	query {
		wpPost {
            title
            content
        }
	}
`