import { useParams } from 'react-router-dom';

export default function MoviePage({ movies }) {
  const { slug } = useParams();
  const movie = movies.find(
    (mov) => mov.title.replace(/\s/g, '-').toLowerCase() === slug
  );
  console.log(movie?.runtime);

  return (
    <section>
      <h1>{movie?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
      />

      <p>Release Date: {movie?.release_date}</p>
      <p>Rating: {movie?.vote_average}</p>
      <p>Overview: {movie?.overview}</p>
    </section>
  );
}
