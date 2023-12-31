const express = require("express");
const knex = require("knex");
const cors = require("cors")

const app = express();

app.use(cors());

const connector = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "2104",
        database: "library"
    }
})


app.get('/api/books', (req, res, next) => {
    const { title } = req.query;
    const request = connector("books")
        .select("*")
        .where("is_deleted", 0);
    if (!!title) {
        console.log(title);
        request.where("title", title);
    }
    request.then((books) => {
        res.send(books);
    });
    // connector.raw('select * from books where is_deleted = 0;').then(([books]) => res.send(books));
});

app.listen(3001, () => {
    console.log("Server is running!");
})

