// empty array to store movies
var movies = [];

// function add to movie object to array
function add(){
        // fetching movie title from title id
        var title = document.getElementById('title').value;
        // fething rating
        var rating = document.getElementById('rating').value;
        // creating object of constructor function Movie
        var movie = new Movie(title, rating);
        // calling validate method of movie to add movie object to array
        if(movie.validate()){
                // push to array
                movies.push(movie);
        }
        else{
                // alert
                alert("Data not Good! Movie not Added!");
        }
        // emptying entry boxes
        document.getElementById('title').value="";
        document.getElementById('rating').value="";
}

// function display to display list
function display(){
        var htmlText = "Movies: <ul>";
        // looping through each movie in list
        for(var i=0;i<movies.length;i++){
                htmlText += "<li>"+movies[i].toString()+"</li>";
        }
        // ending ul
        htmlText += "</ul>";
        // adding to display div in html
        document.getElementById('display').innerHTML = htmlText;
}