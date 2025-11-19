const listaDeProdutos = [
    {nome: "Mochila", preço: 30},
    {nome: "Carteira", preço: 10},
    {nome: "Boné", preço: 150},
    {nome: "Camiseta", preço: 50},
    {nome: "Coturno", preço: 200},
    {nome: "Tênis", preço: 500},
    {nome: "Chinelo" , preço: 15}
];

const produtosCaros = (listaDeProdutos) =>{
    return listaDeProdutos.filter(produto => produto.preço > 50);
};

console.log(produtosCaros(listaDeProdutos));
