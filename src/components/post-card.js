import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import responsive from '../styles/responsive'

const PostCard = ({node}) => {
    const heroImage = node.featuredImage.node.localFile
    return (
        <Card>
            <Link to={`/blog${node.uri}`} className="item-link">
                {heroImage &&(
                    <Hero>
                        <Img
                            fluid={heroImage.childImageSharp.fluid}
                            alt={node.title}
                        />
                    </Hero>
                )}
                <CardTitle className="card-title">{node.title}</CardTitle>
                <CardText
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
                <CardDate>{node.date}</CardDate>
            </Link>
        </Card>
    )
}

export default PostCard

const Hero = styled.div`
    height: 525px;
    margin-bottom: 18px;
    > div {
        height: 100%;
    }
    ${responsive.md} {
        height: 354px;
    }
    ${responsive.sm} {
        height: 335px;
    }
`

const Card = styled.div`
    .item-link {
        display: block;
    }
    .item-link:hover {
        .card-title {
            text-decoration: underline;
        }
    }
`

const CardTitle = styled.h2`
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 8px;
`

const CardText = styled.div`
    p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: 18px;
    }
    .more-link {
        display: none;
    }
`

const CardDate = styled.p`
    font-size: 13px;
    color: #666;
`