const express = require("express"); // let's fetch express itself (the full API)
const app = express(); // express is a function returning an object
// the returned object represents the application we are coding right now
const hbs = require("hbs"); // import the hbs lib in our application

/*
 *  SETUP PHASE
 */

app.use(express.static(__dirname + "/public"));
// the static folder will contain static files: like css, images, sounds, videos, front-end js (DOM) : WE MUST tell express explicitely where it is, and that we wanna allow the browsers to dowlonad files without extra permissions
app.set("view engine", hbs);
// above : use hbs to render html (super html features)
app.set("views", __dirname + "/views");
// hey express : our views are located in that folder

// SYNCHRONOUS: HTTP VERBS
// GET : to access a resource FROM the server
// POST : to send some information TO the server

// console.log(__dirname);
// __dirname is a global variabl, accessible in any node project, representing the absolute path of the file currently executed



// step 3 : routes handling
app.get("/", (req, res) => {
    res.render("home.hbs", {
        books: [
            {
                title: "Harry Potter and the Philosopher's Stone	",
                publichedDate: "1995",
                image: '/assets/images/hpstone.jpeg'
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                publichedDate: "1998",
                image: '/assets/images/hpcs.jpeg'
            },
            {
                title: "Harry Potter and the Prisoner of Azkaban",
                publichedDate: "1999",
                image: '/assets/images/hppa.jpg'
            },
        ],

    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs")
})

app.get("/works", (req, res) => {
    res.render("works.hbs", {
        books: [
            {
                title: "Harry Potter and the Philosopher's Stone	",
                publichedDate: "1995",
                image: '/assets/images/hpstone.jpeg'
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                publichedDate: "1998",
                image: '/assets/images/hpcs.jpeg'
            },
            {
                title: "Harry Potter and the Prisoner of Azkaban",
                publichedDate: "1999",
                image: '/assets/images/hppa.jpg'
            },
        ],})
})

app.listen(3000); // this open a PORT on our server, allowing incomming HTTP request
