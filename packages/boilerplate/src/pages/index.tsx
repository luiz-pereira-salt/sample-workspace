import { useState } from 'react';

import axios from 'axios';

interface Book {
  title: string;
  descriptiion: string;
  imageUrl: string;
}

interface Review {
  id: number;
  text: string;
  author: string;
}

export default function Home({ book }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleGetReviews = async () => {
    // Client-side request are mocked by `mocks/browser.js`.

    const res = await axios('http://localhost:8080/reviews');
    setReviews(res.data);
  };

  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review: Review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.

  const res = await axios.get('http://localhost:8080/book');

  const book = res.data;

  return {
    props: {
      book,
    },
  };
}
