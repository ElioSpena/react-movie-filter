export default function Form({
  newFilmValue,
  text,
  onChangeNewFilm,
  onSubmitNewFilm,
}) {
  return (
    <div className="container pt-5">
      <h2 className="text-light pt-5">Preferiti</h2>
      <form
        className="pt-2 d-flex align-items-center gap-2"
        data-bs-theme="dark"
        onSubmit={onSubmitNewFilm}
        action=""
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={newFilmValue}
            onChange={onChangeNewFilm}
          />
          <button className="btn btn-secondary">{text}</button>
        </div>
      </form>
    </div>
  );
}
