import React from 'react';
import axios from 'axios';
import { Card, CardColumns } from 'react-bootstrap';

export default function AboutPage() {
  const [meme, setMeme] = React.useState([]);

  React.useEffect(() => {
    const fetchMeme = async () => {
      const response = await axios.get('https://some-random-api.ml/meme');
      setMeme(response.data);
    };
    fetchMeme();
  }, []);

  return (
    <CardColumns className="mt-4">
      <Card>
        <Card.Img variant="top" src={meme.image} />
      </Card>
    </CardColumns>
  );
}
