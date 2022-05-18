class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }
    getIdade() {
        let age = dataHoje.getFullYear() - this.dataNascimento.getFullYear();
        if (
            dataHoje.getMonth() < this.dataNascimento.getMonth() ||
            (dataHoje.getMonth() == this.dataNascimento.getMonth() &&
                this.dataNascimento.getDate() < dataHoje.getDate())
        ) {
            age--;
        }
        return age;
    }
}

Pessoa.prototype.getNiver = function () {
    let thisYear = `já fez aniversário esse ano`;
    if (
        dataHoje.getMonth() < this.dataNascimento.getMonth() ||
        (dataHoje.getMonth() == this.dataNascimento.getMonth() &&
            this.dataNascimento.getDate() < dataHoje.getDate())
    ) {
        thisYear = `ainda não fez aniversário esse ano`;
    }
    return thisYear;
};

const dataHoje = new Date();

const people = new Array(10);
{
    people[0] = new Pessoa('Sellene', '2004-10-10');
    people[1] = new Pessoa('Brenno', '2002-06-15');
    people[2] = new Pessoa('Nora', '2010-09-26');
    people[3] = new Pessoa('Akari', '2004-12-12');
    people[4] = new Pessoa('Mikael', '2007-01-14');
    people[5] = new Pessoa('Lutz', '2001-02-18');
    people[6] = new Pessoa('Shiraori', '2006-11-02');
    people[7] = new Pessoa('Rina', '2008-01-01');
    people[8] = new Pessoa('Kurou', '2009-01-21');
    people[9] = new Pessoa('Rei', '2014-11-22');
}

for (let i = 0; i < people.length; i++) {
    if (isNaN(people[i].getIdade())) {
        console.log(
            `${people[i].nome} não possui uma data de aniversário valida`
        );
    } else {
        console.log(
            `${people[i].nome} tem ${people[i].getIdade()} anos e ${people[
                i
            ].getNiver()}`
        );
    }
}
