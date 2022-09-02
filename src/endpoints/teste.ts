import { Response, Request } from "express";

const teste =   (req:Request, res:Response) => {
  res.send("Rota funcionando!")
};

export default teste;
