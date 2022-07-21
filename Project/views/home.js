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
        .cont {
            position: relative;
            left: 600px;
            top: 50px;
            color: white;
            -webkit-text-stroke: 0.5px black;
        }
        .container1 {
            position: fixed;
            left: 50px;
            top: 150px;
            color: white;
        }
        .container2 {
            position: fixed;
            left: 200px;
            top: 150px;
            color: white;
        }
        .container3 {
            position: fixed;
            left: 350px;
            top: 150px;
            color: white;
        }
        .watchlist {
            position: fixed;
            left: 80px;
            top: 370px;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Movies</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <a class="navbar-brand" style="color: rgb(191, 255, 161)">Movies</a>
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

    <div class="container">
        <h1>Welcome</h1>
    </div>
    <div class="container1">
        <img id="image" src="/drama.png" width="100" height="100">
        <br>
        <label class="ml-4 my-2">Drama</label>
        <br>
        <button onclick="location.href = '/drama';" id="drama" class="btn btn-secondary ml-3"> View </button>
    </div>
    <div class="container2">
        <img id="image" src="/horror.png" width="100" height="100">
        <br>
        <label class="ml-4 my-2">Horror</label>
        <br>
        <button onclick="location.href = '/horror';" id="horror" class="btn btn-secondary ml-3"> View </button>
    </div>
    <div class="container3">
        <img id="image" src="/action.png" width="100" height="100">
        <br>
        <label class="ml-4 my-2">Action</label>
        <br>
        <button onclick="location.href = '/action';" id="action" class="btn btn-secondary ml-3"> View </button>
    </div>
    <div class="watchlist">
        <button onclick="location.href = '/watchlist';" id="watchlist" class="btn btn-secondary ml-3" style="width: 300px;">My Watchlist</button>
    </div>
</body>
</html>