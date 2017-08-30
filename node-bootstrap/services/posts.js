var client = require('./contentfulClient').client

function getPost (slug, query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = '2PqfXUJwE8qSYKuM0U6w8M'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getPosts (query) {
  query = query || {}
  query.content_type = '2PqfXUJwE8qSYKuM0U6w8M'
  return client.getEntries(query)
}

function getPostsInCategory (id) {
  return getPosts({'fields.categories.sys.id[in]': id})
}
/*client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.postName) {
      console.log(entry.fields.postName)
    }
  })
})*/
//$('#post').renderPosts(posts)

module.exports = {
  getPost,
  getPosts,
  getPostsInCategory
}
