import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import responsive from '../styles/responsive'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const BlogPost = ({location, data}) => {

    const post = data.wpPost
    const heroImage = post.featuredImage.node.localFile

    return(
        <Layout location={location}>
            <SEO title={post.title} />

                <Article>
                    <ArticleTitle dangerouslySetInnerHTML={{ __html: post.title }} />
                    <ArticleDate>{post.date}</ArticleDate>
                    {heroImage &&(
                    <Hero>
                        <Img
                            fluid={heroImage.childImageSharp.fluid}
                            alt={post.title}
                        />
                    </Hero>
                    )}
                    <Container>
                        <ArticleContent dangerouslySetInnerHTML={{ __html: post.content }} />
                    </Container>
                </Article>

        </Layout>
    )
}

export default BlogPost

const Article = styled.article``

const ArticleTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
`

const ArticleDate = styled.p`
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    ${responsive.sm} {
        margin-bottom: 20px;
    }
`

const Hero = styled.div`
    max-width: 1200px;
    height: 525px;
    margin: 0 auto 50px;
    > div {
        height: 100%;
    }
    ${responsive.md} {
        max-width: 100%;
        height: 405px;
    }
    ${responsive.sm} {
        height: 285px;
        margin: 0 auto 30px;
    }
`

const ArticleContent = styled.div`
    padding: 0 100px;
    p:not(:last-of-type) {
        margin-bottom: 8px;
    }
    ${responsive.md} {
        padding: 0 50px;
    }
    ${responsive.sm} {
        padding: 0;
    }
`

export const query = graphql`
	query($id: String!) {
		wpPost(id: { eq: $id}) {
            title
            date(formatString: "ll")
            content
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
	}
`