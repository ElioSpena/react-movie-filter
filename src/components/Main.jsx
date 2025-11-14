import Films from "./Films";
import Form from "./Form";

export default function Main({
  films,
  newFilmValue,
  text,
  onChangeNewFilm,
  onSubmitNewFilm,
}) {
  return (
    <main>
      <Films films={films} />

      <Form
        newFilmValue={newFilmValue}
        text={text}
        onChangeNewFilm={onChangeNewFilm}
        onSubmitNewFilm={onSubmitNewFilm}
      />
    </main>
  );
}
