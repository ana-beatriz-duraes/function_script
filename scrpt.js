var valorCompra = parseFloat(document.getElementsByName('valor_produto')); //;
var icms = (1-0.12);
var valortotal = (valorCompra,icms)=>{ return valorCompra / icms}; 
var valor_icms = (valortotal) => valortotal - valorCompra;
document.getElementsByName('result').innerHTML = 'O valor do icms é :' = valor_icms(valortotal);
console.log(valortotal(valorCompra,icms));
console.log(valor_icms(valortotal(valorCompra,icms)));
prompt(" Valor do icms é:"+(valor_icms(valortotal(valorCompra,icms)))+"valor total "+valortotal(valorCompra,icms));


var n1 = prompt(" Insira o numero natural de maior valor que deseja saber se o numero de menor valor é seu multiplo: ");
var n2 = prompt(" Insira o numero natural de menor valor que iremos calcular se ele é multiplo do primeiro numero inserido: ");

function resultadoMultiplo (){
    if(n1%n2 ==0){
        prompt( n1+" multiplo "+n2);
    } else{
        prompt( n1+" não é multiplo "+n2);
    }
}
console.log(resultadoMultiplo(n1,n2));



class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase();
        this.preco = parseFloat(preco);
        this.vendido = false;
    }
}