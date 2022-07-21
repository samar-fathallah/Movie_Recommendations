<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            background-image: url("background3.jpg");
            background-repeat: no-repeat;
            background-size: 100%;
        }

     
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search Results</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <a class="navbar-brand" style="color: rgb(191, 255, 161)">Search Results</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            </ul>
            <form method="POST" action='/search' class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" name="Search" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <div>
            <ul>
                <% if(searchedMovies.length==0) { %>
                    <h1> Movie not found </h1>
                <% }; %>
                <% for(let i=0; i<searchedMovies.length; i++) { %>
                    <% if(searchedMovies[i]=="The Conjuring (2013)") { %>
                        <a href="/conjuring" > <%= searchedMovies[i] %> </a><br>
                    <% } else if(searchedMovies[i]=="The Dark Knight (2008)") { %>
                        <a href="/darkknight" > <%= searchedMovies[i] %> </a><br>
                    <% } else if(searchedMovies[i]=="Fight Club (1999)") { %>
                        <a href="/fightclub" > <%= searchedMovies[i] %> </a><br>
                    <% } else if(searchedMovies[i]=="The Godfather (1972)") { %>
                        <a href="/godfather" > <%= searchedMovies[i] %> </a><br>
                    <% } else if(searchedMovies[i]=="The Godfather: Part II (1974)") { %>
                        <a href="/godfather2" > <%= searchedMovies[i] %> </a><br>
                    <% } else if(searchedMovies[i]=="Scream (1996)") { %>
                        <a href="/scream" > <%= searchedMovies[i] %> </a><br>
                    <% }; %>
                <% }; %>
            </ul>
        </div>
</body>
</html>