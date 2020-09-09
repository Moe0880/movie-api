const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./movies");
const app = express();
const {
  getAllMovies,
  getMovieByDirector,
  getMovieByTitle,
  saveNewMovie,
} = require("./controllers/movies");

app.get("/movies", getAllMovies);
app.get("/movies/:directors", getMovieByDirector);
app.get("/movies/:title", getMovieByTitle);
app.post("/movies", bodyParser.json(), saveNewMovie);

app.listen(1337, () => {
  console.log("listening on port 1337..."); // eslint-disable-line no-console
});
