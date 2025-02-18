import useGenre from "@/hooks/useGenres";

const GenreList = () => {
  const { error, genres, loading } = useGenre();
  console.log(genres);
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
