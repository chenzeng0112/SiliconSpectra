// Variables declaration
let pages = 1;
let fetchedData = {};
let likeSet = new Set();
const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=e38e2de7c5bba72cdc61adb628d3c1a2&language=en-US&page=";
const baseImgURL = 'https://image.tmdb.org/t/p/w500';

// const getMovieData = async () => {
//     try{
//         let res = await axios.get(apiURL);
// //        console.log(res);
//         let movieData = res.data;
//         console.log(movieData);
//     } catch (err) {
//         console.log("Loading Failed");
//     }
// }

// Previous page
const prev = () => {
    if (pages > 1) {
        pages--;
        document.getElementById("container").innerHTML = "";
        getMoviesData();
    } else {
        pages = fetchedData.total_pages;
        document.getElementById("container").innerHTML = "";
        getMoviesData();
    }
}

// Next page
const next = () => {
    if (pages < fetchedData.total_pages) {
        pages++;
        document.getElementById("container").innerHTML = "";
        getMoviesData();
    } else {
        pages = 1;
        document.getElementById("container").innerHTML = "";
        getMoviesData();
    }
}

// Fetch data and display movies to the webpage
const getMoviesData = () => {
    document.getElementById("main").style.display ="block";
    document.getElementById("popUp").style.display ="none";
    document.getElementById("liked").style.display = "none";
    document.getElementById("headerList").style.textDecoration = "underline red";

    // document.getElementById("likeList").style.display = "none";

    let url = "".concat(apiURL, pages.toString());
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {    
            fetchedData = data       
            // console.log(fetchedData);
            document.getElementById("total").innerText = "Page " + pages + " / " + data.total_pages;

            // Loop the movie array
            for (let resultsArray = 0; resultsArray < data.results.length; resultsArray++) {
                let movieName = data.results[resultsArray].orginal_title;
                let movieURL = "".concat(baseImgURL, data.results[resultsArray].poster_path);
                let movieImage = document.createElement("img");
                let movieID = data.results[resultsArray].id;

                // movie psoter information
                movieImage.setAttribute("src", movieURL);
                movieImage.setAttribute("alt", movieName);
                movieImage.setAttribute("class", "img");
                movieImage.setAttribute("id", "movieID");

                movieImage.id = movieID;
                movieImage.url = movieURL;
                // movieImage.name = movieName;
                movieImage.title = data.results[resultsArray].title;
                movieImage.release = data.results[resultsArray].release_date;
                movieImage.overview = data.results[resultsArray].overview;
                // movieImage.genre = data.results[resultsArray].genre;

                // movie title and release date information
                let movieTitle = document.createElement("h4");
                movieTitle.innerText = movieImage.title;
                movieTitle.setAttribute("class", "title");
                let releaseDate = document.createElement("p");
                releaseDate.innerText = movieImage.release;
                releaseDate.setAttribute("class", "releaseDate");

                // store the title & release information in a <div>
                let div =  document.createElement("div");
                div.setAttribute("class", "movieDetail");

                // show "Like It" feature on top of movie poster
                let like = document.createElement("div");
                like.innerHTML = "Like It";
                like.setAttribute("class", "like");

                div.appendChild(like);
                div.appendChild(movieImage);
                div.appendChild(movieTitle);
                div.appendChild(releaseDate);

                document.getElementById("container").appendChild(div);
                
                // click to get movie details
                movieImage.addEventListener("click", () => getDetails(movieImage));
                // movieImage.onclick = () => {
                //     getDetails(movieImage);
                // }

                // click to add to like list page
                like.addEventListener("click", () => {
                    if (!likeSet.has(movieImage)) {
                        likeSet.add(movieImage);
                        addToLike(likeSet, movieImage);
                        // document.getElementById("likeList").style.display = "block";
                    }
                });
            }
        })
}

// getMoviesData();
document.addEventListener("DOMContentLoaded", getMoviesData());

// details page function
const getDetails = (image) => {
    // document.getElementById("main").style.display ="none";
    document.getElementById("popUp").style.display ="block";
    document.getElementById("main").style.opacity = "0.6";

    let movieImg = document.createElement("img");
    let movieTitle = document.createElement("h2");
    let movieOverview = document.createElement("p");
    let movieGenre = document.createElement("ul");
    let movieCompany = document.createElement("ul");
    let releaseDate = image.release.substring(0, 4);

    movieTitle.innerText = image.title + " ( " + releaseDate + " )";
    movieOverview.innerText = image.overview;

    movieImg.setAttribute("src", image.url);
    movieImg.setAttribute("alt", "img");
    movieImg.setAttribute("class", "popImage");
    movieImg.setAttribute("id", "popImage");
    movieGenre.setAttribute("id", "genres");
    movieCompany.setAttribute("id", "company");

    document.getElementById("popUpImg").appendChild(movieImg);
    document.getElementById("content").appendChild(movieTitle);
    document.getElementById("content").appendChild(movieGenre);
    document.getElementById("content").appendChild(movieOverview);
    document.getElementById("content").appendChild(movieCompany);

    let url = "https://api.themoviedb.org/3/movie/" + image.id +"?api_key=e38e2de7c5bba72cdc61adb628d3c1a2&language=en-US"
    
    fetch (url)
        .then ((response) => {
            return response.json();
        })
        .then ((data) => {
            // get the genres information
            let genres = data.genres;
            for (let i = 0; i < genres.length; i++) {
                let genreLi = document.createElement("li");
                genreLi.innerHTML = genres[i].name;
                genreLi.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                document.getElementById("genres").appendChild(genreLi);
            }

            // get the production companies information
            let companies = data.production_companies;
            for (let i = 0; i < companies.length; i++) {
                let logoURL = "https://image.tmdb.org/t/p/w500" + companies[i].logo_path;
                let logo =  document.createElement("img");
                logo.src = logoURL;

                let tempLi = document.createElement("li");
                tempLi.setAttribute("id", i.toString());
                document.getElementById("company").appendChild(tempLi);

                document.getElementById(i).appendChild(logo);
            }
        })
    
    document.getElementById(image.id).onclick = document.getElementById("popUp").style.display="flex";

    let closePopUp = document.createElement("div");
    document.getElementById("popUp").appendChild(closePopUp);
    closePopUp.setAttribute("id", "closePopUp");
    closePopUp.innerHTML = "CLOSE";
    closePopUp.onclick = () => {
        document.getElementById("popUpImg").innerHTML="";
        document.getElementById("content").innerHTML="";
        document.getElementById("popUp").style.display ="none";
        document.getElementById("main").style.opacity = "1";
    }
}

// add to likes list function
const addToLkie = (set, image) => {
    let likeList = document.getElementById("likeList");

    // display total number of "Liked" movies at the header
    document.getElementById("likeTotal").innerHTML = set.size.toString();
    document.getElementById("likeTotal").style.display = "block";
    likeList.style.display = "block";

    let title = document.createElement("p");
    let releaseDate = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerText = image.title;
    releaseDate.innerText = image.release;

    let url = image.url;
    let likeImage = document.createElement("img");
    likeImage.setAttribute("src", url);
    likeImage.setAttribute("alt", image.title);
    likeImage.setAttribute("class", "img");
    
    let container = document.getElementById("listContainer");
    let div = document.createElement("div");
    div.setAttribute("class", "likedList");
    div.appendChild(likeImage);
    div.appendChild(title);
    div.appendChild(releaseDate);
    container.appendChild(div);


}

// Movie list onclick function
const movieListShow = () => {
    document.getElementById("container").style.display = "flex";
    document.getElementById("pageDisplay").style.display = "block";
    document.getElementById("liked").style.display = "none";
    document.getElementById("headerList").style.textDecoration = "underline red";
    document.getElementById("likeList").style.textDecoration = "none";
}

const likeListShow = () => {
    document.getElementById("container").style.display = "none";
    document.getElementById("pageDisplay").style.display = "none";
    document.getElementById("liked").style.display = "block";
    document.getElementById("likeList").style.textDecoration = "underline red";
    document.getElementById("headerList").style.textDecoration = "none";

}