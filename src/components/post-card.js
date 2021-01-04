import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const PostCard = ({node}) => {
    return (
        <Link to={`/blog${node.uri}`} className="item-link">
            {node.title}
        </Link>
    )
}

export default PostCard