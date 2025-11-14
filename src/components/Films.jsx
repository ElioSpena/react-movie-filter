export default function Films({films}) {
  return (
    <section className="container mt-5">
      <h3>I miei film preferiti</h3>
      <div className="row">
        {films.map((curFilm, index) => (
          <div key={index} className="col-4 mb-4 ">
            <div className="card">
              <div className="card-body">
                <a href="" className="list-group-item fs-3">
                  {curFilm.title}
                </a>
                <p className="card-text">{curFilm.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
