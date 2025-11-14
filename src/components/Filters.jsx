function FilterGenre({ valueGenre, onSelectChange, genreList }) {
  return (
    <>
      <select
        data-bs-theme="dark"
        className="form-select bg-dark bg-opacity-50"
        value={valueGenre}
        onChange={onSelectChange}
        name="films"
      >
        <option value="">Tutti i Generi</option>

        {genreList.map((curGenre, index) => (
          <option value={curGenre} key={index}>
            {curGenre}
          </option>
        ))}
      </select>
    </>
  );
}

function FilterTitle({ valueText, onChangeTitle }) {
  return (
    <input
      data-bs-theme="dark"
      className="form-control bg-dark bg-opacity-50"
      placeholder="Cerca per titolo..."
      value={valueText}
      onChange={onChangeTitle}
      type="text"
    />
  );
}

export { FilterGenre, FilterTitle };
