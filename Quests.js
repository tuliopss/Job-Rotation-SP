

//2
console.log('2)')
 function fibonacci() {

    let limite_fib = 5;
    let x0 = 0;
    let x1 = 1;
    let fib = [x0, x1];


    for(let i = 3; i <= limite_fib; i++) {
        x2 = x1 + x0;
        x0 = x1;
        x1 = x2;
        fib.push(x2)

}
console.log('Fibonacci: ' + fib)

let searchValue = 3;
let check = fib.includes(searchValue)
if(check) {
    console.log('O número '+ searchValue + ' está na sequência')
} else {
    console.log('O número '+searchValue +' nao está na sequência')
}
}

 fibonacci();
console.log('------------------------------------')
//3
console.log('3)')
var faturamento_diario = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]


let faturamento_true = faturamento_diario.filter(dia => dia.valor > 0)

//console.log(faturamento_true);

let maior = faturamento_true[0].valor;
let menor = faturamento_true[0].valor;
for(let i = 0; i < faturamento_true.length; i++) {

    if(maior < faturamento_true[i].valor) {
        maior = faturamento_true[i].valor;
    }
    if(menor > faturamento_true[i].valor) {
        menor = faturamento_true[i].valor;
    }
}

console.log('Maior valor: '+ maior);
console.log('Menor valor: '+ menor);
let media_mensal = 0;
let soma_total = 0;
let dias_com_maior_faturamento = 0;

//CALCULAR A MEDIA
for (let i = 0; i < faturamento_true.length; i++) {
    let dias_total = faturamento_true.length;
    soma_total += faturamento_true[i].valor;

    media_mensal = soma_total / dias_total;

}
console.log('Media = ' + media_mensal.toFixed(1))

for (let i = 0; i < faturamento_true.length; i++) {
    if(faturamento_true[i].valor > media_mensal) {
        dias_com_maior_faturamento++;
    }
}
 console.log('Dias com faturamento diário maior que a média mensal: ' + dias_com_maior_faturamento)

//4
console.log('------------------------------------')
console.log('4)')
/*
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
*/
let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es =27165.48;
let outros = 19849.53;

let total = sp + rj + mg + es + outros;

let percentSP=(sp / total) * 100
let percentRJ=(rj / total) * 100
let percentMG=(mg / total) * 100
let percentES=(es / total) * 100
let percentOutros=(outros / total) * 100

console.log('Percentual de SP: ' + percentSP.toFixed(0) +'%')
console.log('Percentual do RJ: ' + percentRJ.toFixed(0) +'%')
console.log('Percentual de MG: ' + percentMG.toFixed(0) +'%')
console.log('Percentual de ES: ' + percentES.toFixed(0) +'%')
console.log('Percentual de Outros: ' + percentOutros.toFixed(0) +'%')