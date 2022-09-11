import app from "./app";
import teste from "./endpoints/teste";
import { criaEstudante} from "./endpoints/estudantes/criaEstudante";
import { pegarEstudantes } from "./endpoints/estudantes/pegarEstudantes";

app.get("/teste",teste);
app.post("/estudante", criaEstudante);
app.get("/estudante/:nome", pegarEstudantes);