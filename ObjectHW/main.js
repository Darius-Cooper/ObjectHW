document.getElementById('displayArea').style.display = 'none';
document.getElementById('addMovieButton').addEventListener('click', addMovie);
document.getElementById('showMoviesButton').addEventListener('click', showMovies);

// empty array to store movies
let movieArray = [];

function addMovie() {
    // creating object of constructor function Movie
    let movie = new Movie(
        // fetching movie title from title id
        document.getElementById('titleInput').value,
        // fetching rating
        document.getElementById('ratingInput').value
        );
        // calling validate method of movie to add movie object to array
        if (!movie.isValid()) {
                // alert
                alert('Error: Data was not good.')
        } else {
                 // push to array
                movieArray.push(movie);
        };
        // emptying entry boxes
        document.getElementById('titleInput').value = "";
        document.getElementById('ratingInput').value = "";
        document.getElementById("titleInput").select();
}

// function to display list
function showMovies(){
        document.getElementById('displayArea').style.display = 'block';
        document.getElementById('myUl').innerHTML = "";
        // looping through each movie in list
        for (let i in movieArray) {
                let myLi = document.createElement('li');
                document.getElementById('myUl').appendChild(myLi);
                myLi.innerHTML = movieArray[i].toString();
        }
        document.getElementById("titleInput").select();
}