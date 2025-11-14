const filmsList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

const genreList = [];
filmsList.forEach((film) => 
!genreList.includes(film.genre) && genreList.push(film.genre)
)

console.log(genreList);


export {filmsList, genreList}

