import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import responsive from '../styles/responsive'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PostCard from "../components/post-card"

const PostList = ({location, data}) => {

	const posts = data.allWpPost.edges

	return(
		<Layout location={location}>
			<SEO title="Home" />

			<Container>
                    <ItemGrid>
                        {posts.map(({node}) => {
                            return (
                                <PostCard node={node} />
                            )
                        })}
                    </ItemGrid>
			</Container>

		</Layout>
	)
}

export default PostList

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 60px;
    ${responsive.md} {
        column-gap: 20px;
        row-gap: 50px;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr;
        row-gap: 40px;
    }
`

export const query = graphql`
	query {
		allWpPost(sort: {order: DESC, fields: date}) {
			edges {
				node {
                    title
                    date(formatString: "ll")
                    uri
                    excerpt
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
		}
	}
`