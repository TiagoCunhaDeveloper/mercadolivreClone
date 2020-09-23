const server = require("../src/app");
const request = require("supertest");

describe("GET / POST - VENDEDOR", () => {
  it("GET - Listar Vendedor", async () => {
    const result = await request(server).get("/vendedor");
    expect(result.statusCode).toEqual(200);
  });
  it("POST - Cadastrar Vendedor", async () => {
    const result = await request(server).post('/vendedor').send({
      localizacao: "e699b28cf753359d4c3af03da3945719",
      numero_vendas: 0,
      classificacao: 0
  })
    await request(server).delete('/vendedor/e699b28cf753359d4c3af03da3945719/e699b28cf753359d4c3af03da3945719')
    expect(result.statusCode).toEqual(201);
  });
});
