
export default function Search({ setSearch, getMovies }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length >= 3) {
      setSearch(searchTerm);
    } else {
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='search' placeholder='Search for movies...' onChange={handleSearch} />
    </form>
  );
}
