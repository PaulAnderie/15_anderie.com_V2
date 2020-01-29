const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        // Templates
        const pageTemplate = path.resolve("./src/templates/page.js");
        const podcastTemplate = path.resolve("./src/templates/podcast.js");
        const episodeTemplate = path.resolve("./src/templates/episode.js");
        const postTemplate = path.resolve("./src/templates/post.js");

        resolve(

            // create pages from WP data
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)

                // Pages detail
                const pages = result.data.allWordpressPage.edges
                const podcast = result.data.allWordpressWpPodcast.edges

                createPage({
                    path: '/podcast/',
                    component: slash(podcastTemplate),
                })

                pages.forEach(edge => {
                    createPage({
                        path: edge.node.slug === 'paul-landing' ? '/' : `/${edge.node.slug}/` ,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

                podcast.forEach(edge => {
                    createPage({
                        path: `/podcast/${edge.node.slug}/`,
                        component: slash(episodeTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

                // Posts detail
                // const posts = result.data.allWordpressPost.edges
                //
                // createPaginatedPages({
                //     edges: posts,
                //     createPage: createPage,
                //     pageTemplate: "src/templates/posts.js",
                //     pageLength: 3,
                //     pathPrefix: "posts"
                // })
                //
                // posts.forEach(edge => {
                //     createPage({
                //         path: `/post/${edge.node.slug}/`,
                //         component: slash(postTemplate),
                //         context: {
                //             id: edge.node.id,
                //         },
                //     });
                // })

            })
        )
    });
};
