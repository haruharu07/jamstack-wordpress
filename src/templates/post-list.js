import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

const ItemGrid = styled.div``

export const query = graphql`
	query {
		allWpPost {
			edges {
				node {
					title
					uri
				}
			}
		}
	}
`