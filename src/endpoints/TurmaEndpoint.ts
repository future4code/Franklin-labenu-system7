import { Request, Response } from "express";
import { Turma } from "../classes/Turma";
import connection from "../connection";

const TurmaEndpoint = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      res.statusCode = 404;
      throw new Error(`Está faltando parametros`);
    }
    await connection.raw(
      `INSERT INTO Turma (nome) VALUES ("${req.body.nome}")`
    );
    res.status(201).send(`Criado com sucesso`);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default TurmaEndpoint;
