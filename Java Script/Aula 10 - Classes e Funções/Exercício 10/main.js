class Pessoa {
    constructor(nome, dataNascimento) {
        this.name = nome;
        this.dataNascimento = new Date(dataNascimento);
    }
    getIdade() {
        let age = dataHoje.getFullYear() - this.dataNascimento.getFullYear();
        if (
            dataHoje.getMonth < this.dataNascimento.getMonth() ||
            (dataHoje.getMonth == this.dataNascimento.getMonth() &&
                this.dataNascimento.getDate() < dataHoje.getDate())
        ) {
            age--;
        }
        return age;
    }
}
const dataHoje = new Date();

const people = new Array(10);
{
    people[0] = new Pessoa('Sellene', '2004-10-10');
    people[1] = new Pessoa('Brenno', '2002-06-15');
    people[2] = new Pessoa('Nora', '');
    people[3] = new Pessoa('Akari', '');
    people[4] = new Pessoa('Mikael', '');
    people[5] = new Pessoa('Lutz', '');
    people[6] = new Pessoa('', '');
    people[7] = new Pessoa('', '');
    people[8] = new Pessoa('', '');
    people[9] = new Pessoa('', '');
}

console.log(people[0].getIdade());
