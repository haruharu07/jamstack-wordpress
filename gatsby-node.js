const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

    const GET_PAGES = `
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

    const result = await graphql(GET_PAGES)

    // Create post pages.
    const posts = result.data.allWpPost.edges

    posts.forEach(post => {
    actions.createPage({
        path: `blog${post.node.uri}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
                slug: post.node.uri,
            },
        })
    })

    // Create post list pages.
    actions.createPage({
        path: `/`,
        component: path.resolve(`./src/templates/post-list.js`),
    });

}




// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions

//     return graphql(
//     `
//         {
//             allWpPost {
//                 edges {
//                     node {
//                         title
//                         uri
//                     }
//                 }
//             }
//         }
//     `
//     )

//     // Create post pages.
//     const posts = result.data.allWpPost.edges

//     posts.forEach((post) => {
//         createPage({
//         path: `/${post.node.uri}`,
//         component: path.resolve(`./src/templates/post.js`),
//         context: {
//                 slug: post.node.uri,
//             },
//         })
//     })

// }


// // Create post list pages.
// createPage({
//     path: `/`,
//     component: path.resolve(`./src/templates/post-list.js`),
// });