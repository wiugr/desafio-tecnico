const booksByCategory = [
    {
        category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
        },
        {
            category: "Inteligência Emocional",
            books: [
                {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
                    },
                    {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
                },
                {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
                }
            ]
        }
];

function contadorCategorias() {
    return booksByCategory.length;
}

function contaLivroPorCategoria() {
    booksByCategory.forEach(category => {
        console.log("Categoria: " + category.category + ", Quantidade de livros: "+ category.books.length)
    })
}

function contaAutores() {
    const autores = [];
    booksByCategory.forEach(categoria => {
        categoria.books.forEach(book => {
            book.author.split(" e ").forEach(autor => {
                autor = autor.trim();
                if (!autores.includes(autor)) {
                    autores.push(autor);
                }
            });
        });
    });
    return (autores.length);
}

function mostraLivrosDoAutor(autor) {
    const livros = [];
    booksByCategory.forEach(categoria => {
        categoria.books.forEach(livro => {
            if (livro.author.includes(autor)) {
                livros.push(livro.title);
            }
        });
    });
    return livros;
}

console.log("Quantidade de categorias: " + contadorCategorias());
contaLivroPorCategoria();
console.log("Quantidade de autores: " + contaAutores())
let nomeAutor = prompt("Nome do autor: ")
console.log("Livros de " + nomeAutor +": " + mostraLivrosDoAutor(nomeAutor))
