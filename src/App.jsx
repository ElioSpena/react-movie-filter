import films from "./assets/data/films"

function App() {
  return (
    <>
      <section>

        <ul>

            {films.map((curFilm) => 
            <li>
              <a href="">{curFilm.title}</a>
            </li>
            )}

        </ul>

        <form action="">
              <select name="film" id="">
                {films.map((curFilm) => 
                <option>{curFilm.genre}</option>
                )}
              </select>
        </form>


      </section>

    </>
  )

}

export default App
