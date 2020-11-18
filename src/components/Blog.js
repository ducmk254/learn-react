function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li id={post.id.toString()}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div className="blog">
      {sidebar}

      {content}
    </div>
  );
}

export default Blog;
