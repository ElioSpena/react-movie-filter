import { useEffect, useState } from "react";
import { filmsList, genreList } from "./assets/data/filmsList";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [films, setFilms] = useState(filmsList);
  const [allFilms, setAllFilms] = useState(filmsList);
  const [genre, setGenre] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [newFilm, SetNewFilm] = useState("");

  useEffect(() => {
    setFilms(
      allFilms.filter(
        (film) =>
          film.genre.includes(genre) &&
          film.title.toLowerCase().includes(filteredText.trim().toLowerCase())
      )
    );
  }, [genre, filteredText, allFilms]);

  return (
    <>
      <Header
        genre={genre}
        onSelectChange={(event) => setGenre(event.target.value)}
        genreList={genreList}
        filteredText={filteredText}
        onChangeTitle={(event) => setFilteredText(event.target.value)}
      />

      <Main
        films={films}
        newFilmValue={newFilm}
        text={"Aggiungi un Film"}
        onChangeNewFilm={(event) => SetNewFilm(event.target.value)}
        onSubmitNewFilm={(event) => {
          event.preventDefault();
          setAllFilms((prev) => [...prev, { title: newFilm, genre: "" }]);
        }}
      />
    </>
  );
}

export default App;
