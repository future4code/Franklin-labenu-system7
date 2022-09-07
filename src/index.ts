import app from "./app";
import { criaDocente } from "./endpoints/criaDocente";
import teste from "./endpoints/teste";

app.get("/teste",teste);
app.post("/user/docente", criaDocente)