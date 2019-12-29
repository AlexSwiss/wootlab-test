To configure and use this REST API; you need the following technologies

1. download and install MySQL workbench/Xampp whichever is suitable (in this case xampp)
2. install node v12 or newer versions
3. download and install Postman to test the API

download the repo or click on the fork button

navigate to the directory where the project is downloaded and open in terminal.

run `$npm install` to download all the packages from the package.json file

open xampp/MySQL workbench and start the apache server to run the database

import the SQL file inside xampp

in your terminal run `$npm run server` to start the server on port 5000.


Assumptions made
I did not cover the cart component in this work because the cart can be better managed using Redux and this should be covered in the front end of the application.
Writing api routes for the cart would end up to be re-written in the front end during development.

Issues faced
Figuring out how to use MySQL as a database for my backend language (Node js).
Improving the assignment; Kudos, really challenging i must say considering the Stack,but it would have been better if interviewees are given the freedom of using a preferred database they are well comfortabe with