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
        .container1 {
            position: fixed;
            left: 50px;
            top: 150px;
            color: white;
        }
        .container2 {
            position: fixed;
            left: 300px;
            top: 150px;
            color: white;
            width: 300px;
            text-align: justify;
            text-justify: inter-word;
        }
        .trailer {
            position: fixed;
            left: 700px;
            top: 150px;
            color: white;
            width: 300px;
            text-align: justify;
            text-justify: inter-word;
        }
        .watchlist {
            position: fixed;
            left: 65px;
            top: 470px;
        }
        #my {
            zoom: 110%;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Dark Knight (2008)</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <a class="navbar-brand" style="color: rgb(191, 255, 161)">The Dark Knight (2008)</a>
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
    <div class="container1">
        <img id="image" src="/darkknight.jpg" width="30%" height="20%">
    </div>
    <div class="container2">
            When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.
    </div>
    <div class="watchlist">
        <form method="POST">
             <button id="watchlist" class="btn btn-secondary ml-3">Add to Watchlist</button>
        </form>
    </div>
    <div class="trailer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    </div>
</body>
</html>