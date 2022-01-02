import { Movies } from "./Movies";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, poster, summary, rating,trailer}, index ) => (
        <Movies name={name} poster={poster} summary={summary} rating={rating} tailer={trailer} index={index} />
      ))}
    </section>
  );

}
