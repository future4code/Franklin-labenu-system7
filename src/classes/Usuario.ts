export class Usuario {
    id:string;
    nome:string;
    email:string;
    data_nasc:Date;
    static  turma_id:number
    constructor(id:string, nome:string, email:string, data_nasc:Date){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
    }
    public getIdUsuario(){
        return this.id;
    }
    public getNome():string {
        return this.nome;
    }
    public getEmail():string{
        return this.email;
    }
    public getDataNasc():Date{
        return this.data_nasc;
    }
    public setTurmaId(turma_id:number):void {
        Usuario.turma_id = turma_id;
    }
    
}