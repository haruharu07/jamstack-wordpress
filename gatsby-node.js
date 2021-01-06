const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

    const GET_PAGES = `
        query {
            allWpPost {
                edges {
                    node {
                        title
                        uri
                        id
                    }
                }
            }
        }
    `

    const result = await graphql(GET_PAGES)

    // Create post pages.
    const posts = result.data.allWpPost.edges

    posts.forEach(post => {
    actions.createPage({
        path: `blog${post.node.uri}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
                id: post.node.id,
            },
        })
    })

    // Create post list pages.
    actions.createPage({
        path: `/`,
        component: path.resolve(`./src/templates/post-list.js`),
    });

}