//This Assignment contains 3 files

//File 1: script.js

function helloque()
{
   buttonv = document.querySelector('input').value;
   button = document.querySelector('.mess');
   button.innerText="Hello Everybody! My name is " + buttonv;
}


//File 2: style.css

*
{
    background-color: cyan;
    color: purple;
}

#ta
{
    margin-left:10%;
    margin-top: 5%;
}

td
{
    font-weight: bold;
    font-size: 120%;
    color: blue;
}

button
{
    font-weight: bold;
    color: blue;
}

button:hover
{
    background-color:cadetblue;
    color: blue;
}

.mess
{
    margin-left:10%;
    margin-top:2%;
    font-weight:bold;
    font-size: 200%;
}



//File 3: index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello_Everybody</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="mess"></div>
    <table id="ta">
        <tr>
            <td>Name:</td>
            <td><input type="text" id="eff"></td>
            <td><button onclick="helloque()">Hello</button></td>
        </tr>
       
    </table>
    
    <script src="script.js"></script>
</body>
</html>

