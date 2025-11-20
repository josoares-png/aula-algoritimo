const biblioteca = [
    {Título: "O Pequeno Principe", Autor: "Antoine de Saint-Exupéry", Ano: 1943},
    {Título: "Relatos de Um Gato Viajante", Autor: "Hiro Arikawa", Ano: 2017},
    {Título: "Hamlet", Autor: "William Shakespeare", Ano: 1623},
    {Título: "Meu Pé de Laranja Lima", Autor: "José Mauro", Ano: 1968},
    {Título: "O Senhor dos Anéis", Autor: "J. R. R. Tolkien", Ano: 1954},
    {Título: "Harry Potter e a Pedra Filosofal", Autor: "J.K. Rowling", Ano:1997}
];

function livrosRecentes (biblioteca){
    return biblioteca.filter(livro => livro.Ano > 2010);
};

console.log(livrosRecentes(biblioteca))
