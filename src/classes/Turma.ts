export class Turma {
  private id: number | undefined;
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getIdTurma() {
    return this.id;
  }
  public getNome(): string {
    return this.nome;
  }
}
