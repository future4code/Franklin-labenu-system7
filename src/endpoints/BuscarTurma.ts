import { Request, Response } from "express";
import connection from "../connection";

const BuscarTurma = async (req: Request, res: Response) => {
  try {
    const result = await connection()
      .select("*")
      .from("Turma")
      .where("modulo", ">", 0);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default BuscarTurma;
