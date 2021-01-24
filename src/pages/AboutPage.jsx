import React from 'react';
import { Button, Card, CardColumns, Jumbotron } from 'react-bootstrap';
import RedditImageFetcher from 'reddit-image-fetcher';

export default function AboutPage() {
  const [meme, setMeme] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [loadMore, setLoadMore] = React.useState(0);

  React.useEffect(() => {
    const fetchMeme = async () => {
      setLoading(true);
      const meme = await RedditImageFetcher.fetch({ type: 'meme' });
      setMeme(meme[0]);
      setLoading(false);
    };
    fetchMeme();
  }, [loadMore]);

  const handleClick = () => {
    setLoadMore(loadMore + 1);
    setLoading(true);
  };

  return (
    <>
      <Jumbotron style={{ marginTop: 20 }}>
        <Button
          variant="dark"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? 'Loading…' : 'Load meme'}
        </Button>
        <CardColumns className="mt-2">
          <Card>
            <Card.Title>{meme.title}</Card.Title>
            <Card.Img variant="top" src={meme.image} />
          </Card>
        </CardColumns>
      </Jumbotron>
    </>
  );
}
