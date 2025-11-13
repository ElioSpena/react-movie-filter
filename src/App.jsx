import { useEffect, useState } from "react"
import filmsList from "./assets/data/filmsList"

function App() {
const [films, setFilms] = useState(filmsList);
const [genre, setGenre] = useState("");
console.log(genre);


useEffect( () => {
  genre === "" ? setFilms(filmsList)
   : 
 setFilms(filmsList.filter((curFilm) => curFilm.genre.includes(genre)));
},
 [genre])
  
  return (
    <>
      <section>

          <form>
              <select
              value={genre}
              onChange={ (event)=>
                setGenre(event.target.value)
              }
              name="films">
                {filmsList.map((curFilm, index) => 
                <option
                value={curFilm.genre}
                 key={index}>
                  {curFilm.genre}
                </option>
                )}
                <option value=""></option>
              </select>
        </form>

        <ul>

            {films.map((curFilm, index) => 
            <li key={index}>
              <a href="">{curFilm.title}</a>
            </li>
            )}

        </ul>

      


      </section>

    </>
  )

}

export default App
