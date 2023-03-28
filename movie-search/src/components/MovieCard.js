import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ title, img, releaseDate, rating, slug }) {
  const [poster, setPoster] = useState(img ? `https://image.tmdb.org/t/p/w500${img}` : 'https://via.placeholder.com/500x750');

  const handlePosterError = () => {
    setPoster('https://via.placeholder.com/500x750');
  };

  return (
    <article className='movie-card'>
      <img src={poster} alt={title} onError={handlePosterError} />
      <h3>{title}</h3>
      <p>Release Date: {releaseDate}</p>
      <p>Rating: {rating}</p>
      <Link to={slug} className='link'>View Details</Link>
    </article>
  );
}
