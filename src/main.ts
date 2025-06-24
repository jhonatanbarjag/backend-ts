import express from "express";
import { ConnectDatabase } from './database';

import bodyparser from "body-parser";
import TodoRoutes from "./routes/todo-list.routes";

const port = 3001;

const app = express();

app.use(bodyparser.json());

app.use("/todos", TodoRoutes);

ConnectDatabase();


app.listen(port, () => {
  console.log(`servidor funcionado en el puerto ${port}`);
});
