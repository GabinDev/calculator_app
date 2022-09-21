import express, { Application } from 'express';
import authRouter from '../routes/auth.routes';
import figureRouter from '../routes/figure.routes';
import unityRouter from '../routes/unity.routes';

const apiV1 : Application = express();

apiV1.use('/auth', authRouter);
apiV1.use('/figures', figureRouter);
apiV1.use('/unities', unityRouter);


export default apiV1;