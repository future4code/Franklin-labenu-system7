import app from "./app";
import { criaDocente } from "./endpoints/criaDocente";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import teste from "./endpoints/teste";
import { updateDocente } from "./endpoints/updateDocente";
import {createTurma} from "./endpoints/createTurma"
import { getTurmas, updateModulo } from "./endpoints/updateModulo";
import { turmasAtivas } from "./endpoints/getTurmasAtivas";

app.get("/teste",teste);
app.post("/docente", criaDocente);
app.put("/docente/:id", updateDocente);
app.get("/docente", getAllDocentes);
app.put("/docente/:id/turma", updateDocente);
app.post("/turma", createTurma);
app.get("/turma/:nome", getTurmas);
app.put("/turma/", updateModulo);
app.get("/turmasAtivas", turmasAtivas);