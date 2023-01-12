import PostListItem from './PostListItem'

const PostList = ({ posts }) => {
  if (!posts || posts.length < 1) {
    return <h4>No data...</h4>
  }

  return (
    <div className='listContainer'>
      {
        posts.map(post => {
          return <PostListItem key={post.id} post={post} />
        })
      }
    </div>
  )
}

export default PostList
