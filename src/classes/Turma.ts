export enum Modulo {
    DEFAULT = "0",
    Modulo1 = "JavaScript",
    Modulo2 = "React",
    Modulo3 = "Typescript",
    Modulo4 = "SQL"
}

export class Turma {
    id?:number
    nome: string
    modulo:Modulo = Modulo.DEFAULT

    constructor(nome:string, modulo:Modulo){
        this.nome = nome;
        this.modulo = modulo

    }
    public async setModulo(modulo:Modulo) {
        this.modulo = modulo
    }

}