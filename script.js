
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style>
            /* CSS */

        </style>

        <title>Free API Testing</title>
    </head>
    <body>
        <!-- HTML -->


        <!-- This jQuery script allows us to easily use $.ajax() -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        <script>
            // JS
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
    dataType: 'json',
    success: function(data) {
        //console.log(data[2]);
   var question = prompt("something to write here")
    } 
}); 