import * as dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

export const startDbConnection = async () => {
  await mongoose.connect(process.env.MONGODB_URI as string, {
    dbName :process.env.MONGODB_DBNAME
  });
}

mongoose.connection.on('connected', () => {
  console.log(`Database service started!`)
});