<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        body {
            background-image: url("background2.jpg");
            background-repeat: no-repeat;
            background-size: 100%;
            }
        h1 {
            color: white;
            text-align: center;
            -webkit-text-stroke: 1px blue;
        }
        .cont {
            position:relative;
            left:600px;
            top:50px;
            color: white;
            -webkit-text-stroke: 0.5px black;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Movies</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <h1>Registration</h1>
    </div>
    <div class="cont">
        <form method='post' action='/register'>
            Username: <br>
            <input type="text" id="user" name="username"> <br>
            Password: <br>
            <input type="password" id="password" name="password"> <br> <br>
            <input type="submit" id="simple_click" class="btn btn-secondary" value="Register"> <br>
        </form>
    </div>
</body>

</html>