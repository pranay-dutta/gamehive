import useGenre from "@/hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenre();
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
