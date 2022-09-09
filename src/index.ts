import app from "./app";
import { criaDocente } from "./endpoints/criaDocente";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import teste from "./endpoints/teste";
import { updateDocente } from "./endpoints/updateDocente";

app.get("/teste",teste);
app.post("/user/docente", criaDocente)
app.put("/docente/:id", updateDocente)
app.get("/docente", getAllDocentes)