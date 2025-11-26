const compras = [
  { nome: "Casaco", quantidade: 1, preco: 48 },
  { nome: "Touca", quantidade: 1, preco: 30 },
  { nome: "Blusa", quantidade: 3, preco: 50 },
  { nome: "Regata", quantidade: 2, preco: 32 },
  { nome: "Conjunto", quantidade: 1, preco: 64 },
  { nome: "Sapato", quantidade: 1, preco: 58 },
  { nome: "Camiseta", quantidade: 1, preco: 30 },
  { nome: "Calça", quantidade: 1, preco: 49 }
];

function totalCompras(lista) {
  return lista.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

console.log(totalCompras(compras));
