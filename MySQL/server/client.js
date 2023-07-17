fetch("http://localhost:3001/api/books").then(res => res.json()).then(books => {
    console.log("books", books);
})

fetch("http://localhost:3001/api/books?title=Три мушкетера, 20 лет спустя").then(res => res.json()).then(books => {
    console.log("books", books);
})