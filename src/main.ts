import express from "express";
import { ConnectDatabase } from './database';

import bodyparser from "body-parser";
import TodoRoutes from "./routes/todo-list.routes";
import UserRoutes from "./routes/user.routes";
import AuthRoutes from "./routes/auth.routes";

const port = 3001;

const app = express();

app.use(bodyparser.json());

app.use("/todos", TodoRoutes);
app.use("/users", UserRoutes);
app.use("/auth", AuthRoutes);

ConnectDatabase();


app.listen(port, () => {
  console.log(`servidor funcionado en el puerto ${port}`);
});

// Esto es un ejemplo de una aplicacion de tareas pendientes (todo list) que utiliza express, mongoose y typescript.
// La aplicacion tiene un controlador, un servicio, un repositorio y una ruta para manejar las tareas pendientes.
// El controlador maneja las peticiones y respuestas, el servicio maneja la logica de negocio, el repositorio maneja la comunicacion con la base de datos y la ruta define las rutas de la aplicacion.
// La aplicacion utiliza mongoose para conectarse a una base de datos MongoDB y body-parser para parsear el cuerpo de las peticiones en formato JSON.
// El servidor escucha en el puerto 3001 y se conecta a la base de datos al iniciar la aplicacion.
// Este es un ejemplo basico de una aplicacion RESTful que sigue el patron MVC (Modelo, Vista, Controlador) y utiliza buenas practicas de desarrollo como la separacion de responsabilidades y la inyeccion de dependencias.
// La aplicacion puede ser extendida para agregar mas funcionalidades como autenticacion, autorizacion, validacion de datos, manejo de errores, pruebas unitarias, entre otras.
// Tambien se pueden agregar mas rutas y controladores para manejar otras entidades o recursos de la aplicacion.
