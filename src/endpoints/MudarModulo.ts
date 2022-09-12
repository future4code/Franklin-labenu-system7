import { Request, Response } from "express";
import connection from "../connection";

const MudarModulo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { modulo } = req.body;

    if (!modulo) {
      res.statusCode = 404;
      throw new Error(`Está faltando parametros`);
    }

    if (modulo < 0 || modulo > 6) {
      res.statusCode = 404;
      throw new Error(`O modulo deve ser entre 1 e 6`);
    }

    await connection("Turma").update({ modulo }).where({ id });
    res.status(200).send("Modulo alterado com sucesso");
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default MudarModulo;
