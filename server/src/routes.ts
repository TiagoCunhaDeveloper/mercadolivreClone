import express from 'express';

import ClassesController from './controllers/ProdutosController';
import ConnectionsController from './controllers/VendedorController';

const routes = express.Router();
const produtosControllers = new ClassesController();
const vendedorControllers = new ConnectionsController();

routes.get('/produtos', produtosControllers.index);
routes.get('/produtos/:id', produtosControllers.show);
routes.post('/produtos', produtosControllers.create);

routes.get('/vendedor', vendedorControllers.index);
routes.delete('/vendedor/:token/:localizacao', vendedorControllers.destroy);
routes.post('/vendedor', vendedorControllers.create);

export default routes;
