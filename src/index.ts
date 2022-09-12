import app from "./app";
import { criaDocente } from "./endpoints/criaDocente";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import teste from "./endpoints/teste";
import { updateDocente } from "./endpoints/updateDocente";
import BuscarTurma from "./endpoints/BuscarTurma";
import MudarModulo from "./endpoints/MudarModulo";
import TurmaEndpoint from "./endpoints/TurmaEndpoint";

app.get("/teste", teste);
app.post("/docente", criaDocente);
app.put("/docente/:id", updateDocente);
app.get("/docente", getAllDocentes);
app.put("/docente/:id/turma", updateDocente);

app.post("/criar-turma", TurmaEndpoint);
app.get("/buscar-turma", BuscarTurma);
app.post("/mudar-modulo/:id", MudarModulo);
