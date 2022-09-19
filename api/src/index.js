import express, { json } from  'express';
import cors from  'cors';
import funcionarioController from './controller/funcionarioController.js'
import servicosController from './controller/servicosController.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(funcionarioController);
server.use(servicosController);

server.listen(process.env.PORT, () => console.log(`Api rodando na porta ${process.env.PORT}`))