const moviesJson = require('./movies.json');

//1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
class MovieAPI {
    constructor(movies) {
        this.movies = movies;
        this.movies.forEach((movie, i) => {
            movie.id = i + 1
        })
        this.movies.forEach((movie) => {
            movie.rating = Math.floor(Math.random() * 5) + 1
        })
    }

    // 2. A method that returns movies from a certain genre.
    filteredByGenre = function(genre) {
        const filteredMovies = API.movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase())
        return filteredMovies
    }

    // 3. A method that removes a movie with a certain id (if found).
    removeMovie = function(id) {
        //if id exists
        if (API.movies.some((movie) => movie.id === id)) {
            const filteredMovies = API.movies.filter((movie) => movie.id !== id)
            return filteredMovies
        } else {
            //if id doesn't exist
            console.error('Can find the movie, please check the id again.')
        }
    }

    // 4. A method that returns the movies with the subtitle and thumb properties filtered out.
    filterSubtitleAndThumb = function() {
        //Delete subtitle and thumb and remain the rest properties.
        const filteredMovies = API.movies.map(({ subtitle, thumb, ...rest }) => rest)
        return filteredMovies
    }

    // 5. A method that returns the movies sorted by name.
    sortByName = function() {
        const sortedMovies = API.movies.sort(
            (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        )
        return sortedMovies
    }

    // 6. A method that returns the 2 top rated movies and 2 bottom rated movies.
    topAndBottom = function() {
        const sortedMovies = API.movies.sort((a, b) => a.rating < b.rating ? 1 : -1)
        const topMovies = sortedMovies.slice(0, 2)
        const bottomMovies = sortedMovies.slice(sortedMovies.length - 2, sortedMovies.length)
        const result = {}
        result.topTwo = topMovies
        result.bottomTwo = bottomMovies
        return result
    }

    // 7. A method that prints out the three top rated movies.
    topThree = function() {
        const sortedMovies = API.movies.sort((a, b) => a.rating < b.rating ? 1 : -1)
        const topMovies = sortedMovies.slice(0, 3)
        console.log(topMovies)
    }

    // 8. A method that prints out movies sorted from bottom rated to top rated.
    bottomToTop = function() {
        const sortedMovies = API.movies.sort((a, b) => a.rating > b.rating ? 1 : -1)
        console.log(sortedMovies)
    }

    // 9. A method that allows the user to add a new movie object to the movie list 
    addNew = function(description, sources, subtitle, thumb, title, genre) {
        API.movies.push({
            description,
            sources: [sources],
            subtitle,
            thumb,
            title,
            genre
        })
    }

    // 10.A method that returns a movie with a certain id (if found).
    searchById = function(id) {
        const searchedMovie = API.movies.filter((movie) => movie.id === id)
        if (!searchedMovie.length) {
            console.error('Can find the movie, please check the id again.')
        } else {
            return searchedMovie
        }
    }

    // 11. A method that changes the title of a movie with a certain id(if found).The updated title should be sent in as an argument to the method.
    changeTitle = function(id, title) {
        const foundIndex = API.movies.findIndex((movie) => movie.id === id)
        if (!foundIndex) {
            console.error('Can find the movie, please check the id again.')
        } else {
            API.movies[foundIndex].title = title
        }
    }
}

const API = new MovieAPI(moviesJson)