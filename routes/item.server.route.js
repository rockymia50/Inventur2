// ./express-server/routes/item.server.route.js
import express from 'express';
//import controller file
import * as itemController from '../controllers/item.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
     .get(itemController.getItems)
     .post(itemController.addItem)
     .put(itemController.updateItem);
router.route('/:id')
      .get(itemController.getItem)
      .delete(itemController.deleteItem);
export default router;