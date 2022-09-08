import app from "./app";
import { criaDocente } from "./endpoints/criaDocente";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import teste from "./endpoints/teste";
import { updateEspecialidade } from "./endpoints/updateEspecialidade";

app.get("/teste",teste);
app.post("/user/docente", criaDocente)
app.put("/docente/:id", updateEspecialidade)
app.get("/docente", getAllDocentes)