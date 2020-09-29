import express from 'express';

import ProdutosController from './controllers/ProdutosController';
import VendedorController from './controllers/VendedorController';

const routes = express.Router();
const produtosControllers = new ProdutosController();
const vendedorControllers = new VendedorController();

routes.get('/produtos', produtosControllers.index);
routes.get('/produtos/:id', produtosControllers.show);
routes.post('/produtos', produtosControllers.create);
routes.delete('/produtos/:token/:nome', produtosControllers.destroy);

routes.get('/vendedor', vendedorControllers.index);
routes.delete('/vendedor/:token/:localizacao', vendedorControllers.destroy);
routes.post('/vendedor', vendedorControllers.create);

export default routes;
