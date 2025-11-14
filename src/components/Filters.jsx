function FilterGenre({ valueGenre, onSelectChange, genreList }) {
  return (
    <>
      <select value={valueGenre} onChange={onSelectChange} name="films">
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
      placeholder="Cerca per titolo..."
      value={valueText}
      onChange={onChangeTitle}
      type="text"
    />
  );
}

export { FilterGenre, FilterTitle };
