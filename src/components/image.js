import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = (props) => (
    <StaticQuery
        query={graphql`
        query {
            images: allFile {
                edges {
                    node {
                    relativePath
                    name
                        childImageSharp {
                            fluid(maxWidth: 2000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        `}

        render={(data) => {
        const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(props.filename);
        });
        if (!image) { return null; }

        const imageSizes = image.node.childImageSharp.fluid;
        return (
            <Img
            alt={props.alt}
            sizes={imageSizes}
            style={{height: "100%"}}
            />
        );
        }}
    />
)

export default Image