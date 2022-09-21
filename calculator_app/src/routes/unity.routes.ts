import express from 'express';
import { getUnity } from '../controllers/unity.controllers';


const unityRouter = express.Router();

unityRouter
  .get('/', getUnity);


export default unityRouter;