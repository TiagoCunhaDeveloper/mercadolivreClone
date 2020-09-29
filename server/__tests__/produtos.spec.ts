const serverP = require("../src/app");
const requestP = require("supertest");

describe("GET / POST - PRODUTOS", () => {
  it("GET - Listar UM Produto", async () => {
    const result = await requestP(serverP).get("/produtos/1");
    expect(result.statusCode).toEqual(200);
  });
  it("GET - Listar TODOS Produtos", async () => {
    const result = await requestP(serverP).get("/produtos");
    expect(result.statusCode).toEqual(200);
  });
  it("POST - Cadastrar Produto", async () => {
    const result = await requestP(serverP).post('/produtos').send({
      nome:"e699b28cf753359d4c3af03da3945719",
      descricao: "Camiseta preta tamanho G",
      valor: 100,
      parcelas: 3,
      img: "https://e7.pngegg.com/pngimages/945/970/png-clipart-t-shirts-t-shirts-mens.png",
      id_vendedor: 2
    })
    await requestP(serverP).delete('/produtos/e699b28cf753359d4c3af03da3945719/e699b28cf753359d4c3af03da3945719')
    expect(result.statusCode).toEqual(201);
  });
});
