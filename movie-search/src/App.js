import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './components/MoviePage';
import Layout from './components/Layout';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('james+bond');

  const getMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=50dd512fc0c1023b7b250ea1ab908f65&query=${search}`
    );
    const data = await response.json();
    setMovies(data.results);
  }, [search]);
  

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
	<Router>
		<Routes>
			<Route element={<Layout />}>
				<Route
				index
				element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />}
				/>
				<Route path=':slug' element={<MoviePage movies={movies} />} />
			</Route>
		</Routes>
	</Router>
  );
}

export default App;
