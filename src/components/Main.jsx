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
    <main className="min-vh-100 bg-dark">
      <Form
        newFilmValue={newFilmValue}
        text={text}
        onChangeNewFilm={onChangeNewFilm}
        onSubmitNewFilm={onSubmitNewFilm}
      />

      <Films films={films} />
    </main>
  );
}
