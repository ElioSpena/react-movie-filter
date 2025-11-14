import { useEffect, useState } from "react"
import filmsList from "./assets/data/filmsList"

function App() {
const [films, setFilms] = useState(filmsList);
const [genre, setGenre] = useState("");
const [filteredText, setFilteredText] = useState("");

useEffect(() => {
  setFilms(
    filmsList.filter(film =>
      (film.genre.includes(genre)) &&
      (film.title.toLowerCase().includes(filteredText.trim().toLowerCase()))
    )
  );
}, [genre, filteredText]);
  
  return (
    <> 
      <section>
        
{/* filtro generi */}
<h3>Filtra per genere</h3>
          
              <select
              value={genre}
              onChange={ (event)=>
                setGenre(event.target.value)
              }
              name="films">
                {filmsList.map((curFilm, index) => 
               ( <option
                value={curFilm.genre}
                 key={index}>
                  {curFilm.genre}
                </option>)
                )}
                <option value="">Tutti i Generi</option>
              </select>
       

 {/* filtro titolo */} 
 <h3>Filtra per titolo</h3>
           
      <input
      value={filteredText}
      onChange={(event) =>
        setFilteredText(event.target.value)
      }
       type="text" />
       



{/* lista films */}

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
