# #Backend Mercado Livre clone
Backend simples para cadastro de produtos e vendedores em node js utilizando type script.

## Rotas
### Vendedor
- `POST /vendedor`:
```js
// Request(Body-json):
{
  localizacao: "",
  numero_vendas: 0,
  classificacao: 0
}
// Response: StatusCode: 201 (Created)
```

- `GET /vendedor`: Listar todos os vendedores
```js
// Response: StatusCode: 200 (OK)
[
  {
    id: 0,
    localizacao: "",
    numero_vendas: 0,
    classificacao: 0
  }
]
```

- `DELETE /vendedor/e699b28cf753359d4c3af03da3945719/:localizacao`: Deleta o vendedor passando um token e a localização como chave.
```js
// Response: StatusCode: 200 (OK)
```

### Produtos
- `POST /produtos`:
```js
// Request(Body-json):
{
  nome:"",
  descricao: "",
  valor: 0,
  parcelas: 0,
  img: "",
  id_vendedor: 0
}
// Response: StatusCode: 201 (Created)
```

- `GET /produtos`: Listar todos os produtos
```js
// Response: StatusCode: 200 (OK)
[
  {
    id: 0,
    nome: "",
    descricao: "",
    valor: 0,
    parcelas: "",
    img: "",
    id_vendedor: 0
  }
]
```

- `GET /produtos/id`: Listar um produto
```js
// Response: StatusCode: 200 (OK)
[
  {
    id: 0,
    nome: "",
    descricao: "",
    valor: 0,
    parcelas: "",
    img: "",
    id_vendedor: 0,
    localizacao: "",
    numero_vendas: 0,
    classificacao: 0
  }
]
```

- `DELETE /produtos/e699b28cf753359d4c3af03da3945719/:nome`: Deleta o produto passando um token e o nome como chave.
```js
// Response: StatusCode: 200 (OK)
```

## Execução
Para executar o projeto use:(Projeto rodando na porta http://localhost:3333)
```js
npm start
```
Para executar os testes use:
```js
npm test
```
Para executar as migrações use:
```js
npm knex:migrate
```
