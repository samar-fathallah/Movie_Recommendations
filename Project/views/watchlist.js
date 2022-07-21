<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            background-image: url("background3.jpg");
            background-repeat: no-repeat;
            background-size: 100%;
        }

        h1 {
            color: white;
            text-align: center;
            -webkit-text-stroke: 1px blue;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My myWatchlist</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <a class="navbar-brand" style="color: rgb(191, 255, 161)">My myWatchlist</a>
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
                <% for(let i=0; i<myWatchlist.length; i++) { %>
                    <% if(myWatchlist[i]=="The Conjuring (2013)") { %>
                        <a href="/conjuring" > <%= myWatchlist[i] %> </a><br>
                    <% } else if(myWatchlist[i]=="The Dark Knight (2008)") { %>
                        <a href="/darkknight" > <%= myWatchlist[i] %> </a><br>
                    <% } else if(myWatchlist[i]=="Fight Club (1999)") { %>
                        <a href="/fightclub" > <%= myWatchlist[i] %> </a><br>
                    <% } else if(myWatchlist[i]=="The Godfather (1972)") { %>
                        <a href="/godfather" > <%= myWatchlist[i] %> </a><br>
                    <% } else if(myWatchlist[i]=="The Godfather: Part II (1974)") { %>
                        <a href="/godfather2" > <%= myWatchlist[i] %> </a><br>
                    <% } else if(myWatchlist[i]=="Scream (1996)") { %>
                        <a href="/scream" > <%= myWatchlist[i] %> </a><br>
                    <% }; %>
                <% }; %>
            </ul>
        </div>
</body>
</html>