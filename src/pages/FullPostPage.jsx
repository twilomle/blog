import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import mockapi from '../api/mockapi';

export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleString();
};

export default function FullPostPage() {
  const [post, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const { id } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await mockapi.get(`/posts/${id}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  React.useEffect(() => {
    const fetchComments = async () => {
      const response = await mockapi.get(`/posts/${id}/comments`);
      setComments(response.data);
    };
    fetchComments();
  }, []);

  return (
    <>
      <Button
        variant="dark"
        style={{ marginBottom: 20, marginTop: 20 }}
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </Button>
      <Card key={post.id}>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {formatDate(post.createdAt)}
        </Card.Footer>
      </Card>
      <h3 className="mb-3 mt-4">Комментарии:</h3>
      {comments &&
        comments.map((post) => (
          <Card key={comments.postId + comments.name} className="mt-4">
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
