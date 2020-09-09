const movies = require("../movies");
const { response } = require("express");
const { includes } = require("../movies");
const getAllMovies = (request, response) => {
  return response.send(movies);
};
const getMovieByDirector = (request, response) => {
  const foundDirector = movies.filter((movie) =>
    movie.directors.find((director) =>
      director.toLowerCase().includes(request.params.directors.toLowerCase())
    )
  );
  return response.send(foundDirector);
};

const getMovieByTitle = (request, response) => {
  const foundTitle = movies.filter((movie) =>
    movie.title.toLowerCase().includes(request.params.title.toLowerCase())
  );
  return response.send(foundTitle);
};

const saveNewMovie = (request, response) => {
  const {
    title,
    directors,
    releaseDate,
    rating,
    runTime,
    genres,
  } = request.body;

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response
      .status(400)
      .send(
        "The following parameters are required: title, directors, releaseDate, rating, runTime, genres"
      );
  }

  const newMovie = {
    title,
    directors,
    releaseDate,
    rating,
    runTime,
    genres,
  };

  movies.push(newMovie);

  return response.status(201).send(newMovie);
};
module.exports = {
  getAllMovies,
  getMovieByDirector,
  getMovieByTitle,
  saveNewMovie,
};
