export default function Form({
  newFilmValue,
  text,
  onChangeNewFilm,
  onSubmitNewFilm,
}) {
  return (
    <div className="container">
      <form onSubmit={onSubmitNewFilm} action="">
        <input value={newFilmValue} onChange={onChangeNewFilm} type="text" />
        <button>{text}</button>
      </form>
    </div>
  );
}
