import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import mockapi from '../api/mockapi';
import { Context } from '../store';

export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleString();
};

export default function HomePage() {
  const [globalPosts, setGlobalPosts] = React.useContext(Context);
  const [posts, setPosts] = React.useState(globalPosts);

  React.useEffect(() => {
    if (globalPosts === null) {
      console.log(globalPosts);
      setPosts(null);
      return;
    }
    if (!globalPosts[0]) {
      const fetchPosts = async () => {
        const response = await mockapi.get('/posts');
        setPosts(response.data);
      };
      fetchPosts();
    } else {
      setPosts(globalPosts);
    }
  }, [globalPosts]);
  if (posts === null)
    return (
      <div style={{ fontSize: '30px', paddingLeft: '10px' }}>Nothing found</div>
    );
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
      {!posts[0] &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
          <Card key={el}>
            <Skeleton height={200} width={'100%'} />
            <Card.Body>
              <Card.Title>
                <Skeleton height={25} width={'100%'} />
              </Card.Title>
              <Skeleton height={50} width={'100%'} />
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Skeleton height={25} width={'100%'} />
            </Card.Footer>
          </Card>
        ))}
    </CardColumns>
  );
}
