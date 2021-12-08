const Post = ({post}) => {
  return (
    <div className='post'>
      <h4>{post.id}-{post.title}</h4>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
