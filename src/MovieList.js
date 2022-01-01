import { Movies } from "./Movies";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, poster, summary, rating }) => (
        <Movies name={name} poster={poster} summary={summary} rating={rating} />
      ))}
    </section>
  );

}
