
class Pessoa {
    constructor(nome,idade,cidade) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }
    
    apresentar_se(){console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e moro em ${this.cidade}`  );
    }

    }
    const Pessoa1 = new Pessoa("Ana Beatriz",19,"Marília");
    Pessoa1.apresentar_se();