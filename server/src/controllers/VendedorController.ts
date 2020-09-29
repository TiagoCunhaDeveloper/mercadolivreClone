/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import db from '../db/connection';

export default class VendedorController {
  async index(req: Request, res: Response) {
    const vendedores = await db('vendedor').select('*');
    return res.json(vendedores);
  }

  async create(req: Request, res: Response) {
    const { localizacao,numero_vendas,classificacao } = req.body;

    await db('vendedor').insert({
      localizacao,numero_vendas,classificacao
    });

    return res.status(201).send();
  }

  async destroy(req: Request, res: Response){
    const {localizacao,token} = req.params;
    if (!token || token != 'e699b28cf753359d4c3af03da3945719') {
      return res.status(400).json({
        error: 'Token Inválido',
      });
    }
    await db('vendedor').where('localizacao', localizacao).del();
    return res.status(200).send();
  }
}
