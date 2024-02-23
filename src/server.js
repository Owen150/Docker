const express = require('express');
//Create an Express Application using the Exress Module
const app = express();
const port = 3000;

//Get request that includes the path to get the response back from the server
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Landing Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                h1 {
                    color: #333;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #4caf50;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to My Simple Js Landing Page</h1>
            <p>Discover amazing things here!</p>
            <button id="ctaButton">Click Me!</button>
        
            <script>
                // JavaScript functionality
                document.getElementById('ctaButton').addEventListener('click', function() {
                    alert('Button Clicked! Feel free to add more functionality.');
                });
            </script>
        </body>
        </html>
    `); 
});

//Port to be used
app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});