import express from 'express';
import apiV1 from './api/apiV1';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import auth from './middleware/auth';

const app = express();


app.use(express.json());
app.use(helmet.contentSecurityPolicy());
app.use(helmet.hidePoweredBy());
app.use(cors());
app.use(morgan('combined'));
// app.use(auth)


app.use('/api/v1', apiV1);





export default app;