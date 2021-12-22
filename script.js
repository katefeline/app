let numberOfFilms = +prompt('How many films have you watched this year?', '');

const personalFilmDB = {
    count: numberOfFilms,
    films: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What was the last film you saw?", ''),
    b = prompt('Rate it', ''),
    c = prompt("Who played the main role?", '');

personalFilmDB.films[a] = b;
personalFilmDB.actors = c;

console.log(personalFilmDB);