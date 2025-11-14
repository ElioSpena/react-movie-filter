export default function Films({ films }) {
  function colorGenre(genre) {
    if (genre === "Thriller") {
      return "bg-warning";
    } else if (genre === "Romantico") {
      return "bg-danger";
    } else if (genre === "Fantascienza") {
      return "bg-primary";
    } else {
      return "bg-success";
    }
  }

  return (
    <section className="container mt-5">
      <div className="row">
        {films.map((curFilm, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className={`card ${colorGenre(curFilm.genre)}`}>
              <div className="card-body">
                <a href="" className="list-group-item fs-3 fw-bold">
                  {curFilm.title}
                </a>
                <p className="card-text">Genere: {curFilm.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
