# jQuery Client for Restoo API Server

## Installation

Download restoo.js or clone this repository and include it after JQuery in your HTML File.

## Usage

Since Restoo is basically just a wrapper for MEDOO you can use the same Syntax as you would use for MEDOO (http://medoo.in)
However in this Version only select, update and delete Funtions are implemented.

To create the Client use the following possible options:
```
{
  api : "http://localhost:8080/",     <-- Your API Endpoint with trailing slash / Mandatory
  auth: {                             <-- Auth Header / Optional
    "X-Authentication" : "sometoken"
  }
}
```

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title></title>
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="restoo.js"></script>
    <script>

    /* Create RESTOO Client */

    var Client = $.restoo({
      api : "http://localhost:8080/",
      auth: {
        "X-Authentication" : "sometoken"
      }
    });

    Client.select(
      "tbl_module",
      "*"
    ).then(
      function(data){
        console.log(data)
      }
    );

    </script>

  </body>
</html>
```
