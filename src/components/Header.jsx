import { FilterGenre, FilterTitle } from "./Filters";

export default function Header({
  genre,
  genreList,
  onSelectChange,
  filteredText,
  onChangeTitle,
}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container">
          <a className="navbar-brand" href="http://localhost:5173/">
            <h1>Nesplix</h1>
          </a>
          <div className="d-flex gap-4">
            <FilterTitle
              valueText={filteredText}
              onChangeTitle={onChangeTitle}
            />

            <FilterGenre
              valueGenre={genre}
              onSelectChange={onSelectChange}
              genreList={genreList}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
