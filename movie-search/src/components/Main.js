import MovieCard from './MovieCard';
import Search from './SearchResults';

export default function Main({ movies, setSearch, getMovies }) {
  return (
    <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            slug={movie.title.replace(/\s/g, '-').toLowerCase()}
          />
        ))}
      </section>
    </>
  );
}
