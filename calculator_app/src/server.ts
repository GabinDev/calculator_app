import { createServer } from 'http';
import { startDbConnection } from './services/mongodb';
import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || process.env.APP_DEFAULT_PORT;
const server = createServer(app);


const startServer = async () => {
  await startDbConnection();
  await server.listen(PORT);
}

startServer()
  .then(() => console.log(`Server listen on port ${PORT}!`))
  .catch((err) => console.log(err));