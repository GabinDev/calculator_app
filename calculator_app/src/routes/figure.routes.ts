import express from 'express';
import { getFigures } from '../controllers/figure.controllers';


const figureRouter = express.Router();

figureRouter
  .get('/', getFigures);


export default figureRouter;