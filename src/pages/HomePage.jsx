import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import mockapi from '../api/mockapi';

export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleString();
};

export default function HomePage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await mockapi.get('/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <CardColumns className="mt-4">
      {posts &&
        posts.map((post) => (
          <Card key={post.id}>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>
                <Link to={`/post/${post.id}`}> {post.title}</Link>
              </Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              {formatDate(post.createdAt)}
            </Card.Footer>
          </Card>
        ))}
    </CardColumns>
  );
}
