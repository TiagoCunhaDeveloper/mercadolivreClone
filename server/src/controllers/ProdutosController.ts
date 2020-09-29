/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Response, Request } from 'express';

import db from "../db/connection";
export default class ProdutosController {
  async index(req: Request, res: Response) {

    const produtos = await db('produtos').select('*');

    return res.json(produtos);
  }

  async show(req: Request, res: Response){
    const idProduto = req.params.id;
    const produto = await db('produtos')
                          .where('produtos.id', '=', idProduto)
                          .join('vendedor', 'produtos.id_vendedor', '=', 'vendedor.id')
                          .select(['produtos.*', 'vendedor.localizacao','vendedor.numero_vendas','vendedor.classificacao'])
    return res.json(produto);
  }

  async create(req: Request, res: Response) {
    const {
      nome,
      descricao,
      valor,
      parcelas,
      img,
      id_vendedor
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('produtos').insert({
       nome,descricao,valor,parcelas,img,id_vendedor
      });
      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new class.' });
    }
  }

  async destroy(req: Request, res: Response){
    const {nome,token} = req.params;
    if (!token || token != 'e699b28cf753359d4c3af03da3945719') {
      return res.status(400).json({
        error: 'Token Inválido',
      });
    }
    await db('produtos').where('nome', nome).del();
    return res.status(200).send();
  }
}
