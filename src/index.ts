import app from "./app";
import teste from "./endpoints/teste";
import { criaEstudante} from "./endpoints/estudantes/criaEstudante";

app.get("/teste",teste);
app.post("/estudante", criaEstudante);