//draw 01

var estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",

  "Rio Branco",
  "Maceió",
  "Macapá",
  "Manaus",
  "Salvador",
  "Fortaleza",
  "Brasília",
  "Vitória",
  "Goiânia",
  "São Luís",
  "Cuiabá",
  "Campo Grande",
  "Belo Horizonte",
  "Belém",
  "João Pessoa",
  "Curitiba",
  "Recife",
  "Teresina",
  "Rio de Janeiro",
  "Natal",
  "Porto Alegre",
  "Porto Velho",
  "Boa Vista",
  "Florianópolis",
  "São Paulo",
  "Aracaju",
  "Palmas"
]

var siglas = [
  'AC',
'AL',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MS',
'MT',
'MG',
'PA',
'PB',
'PR',
'PE',
'PI',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO',

  "Rio Branco",
  "Maceio",
  "Macapa",
  "Manaus",
  "Salvador",
  "Fortaleza",
  "Brasilia",
  "Vitoria",
  "Goiania",
  "Sao Luis",
  "Cuiaba",
  "Campo Grande",
  "Belo Horizonte",
  "Belem",
  "Joao Pessoa",
  "Curitiba",
  "Recife",
  "Teresina",
  "Rio de Janeiro",
  "Natal",
  "Porto Alegre",
  "Porto Velho",
  "Boa Vista",
  "Florianopolis",
  "Sao Paulo",
  "Aracaju",
  "Palmas"
]

var x = [
171,
179,
39,
106,
203,
116,
242,
298,
262,
113,
301,
210,
282,
106,
146,
350,
162,
155,
321,
123,
415,
192,
20,
383,
318,
194,
190,

191,
199,
59,
126,
223,
136,
262,
318,
282,
133,
321,
230,
302,
126,
166,
370,
182,
175,
341,
143,
435,
212,
40,
403,
338,
214,
210,
]

var y = [
19,
440,
217,
91,
355,
398,
280,
398,
272,
302,
200,
195,
320,
217,
459,
247,
442,
360,
368,
445,
223,
106,
113,
255,
260,
433,
282,

19,
440,
217,
91,
355,
398,
280,
398,
272,
302,
200,
195,
320,
217,
459,
247,
442,
360,
368,
445,
223,
106,
113,
255,
260,
433,
282,
]

var perg = ["Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Capital BR", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado", "Estado",  "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Nome do DF", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital", "↑ Capital"]

var array = [["imgs/brasil.webp", x, y, siglas, estados, perg], ["imgs/brasil.webp", x, y, siglas, estados, perg], ["imgs/brasil.webp", x, y, siglas, estados, perg], ["imgs/brasil.webp", x, y, siglas, estados, perg], ["imgs/brasil.webp", x, y, siglas, estados, perg],
  ['imgs/nordeste.webp', [25], [25], ["nordeste"], ["Região Nodeste"], ["Região"]],
   ['imgs/norte.webp', [25], [25], ["Norte"], ["Região norte"], ["Região"]],
    ['imgs/co.webp', [25], [25], ["Centro-Oeste"], ["Centro Oeste"], ["Região"]],
     ['imgs/sudeste.webp', [25], [25], ["Sudeste"], ["Região Sudeste"], ["Região"]],
      ['imgs/sul.webp', [25], [25], ["Sul"], ["Região Sul"], ["Região"]]]



/*
[img, [x1, x2], [y1, y2], [rsp1, rsp2], [rsp1.2, rsp2.2], [perg1, perg2]]
[0, [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
nordeste: ['imgs/nordeste.webp', [25], [25], ["Nordeste"], ["Região Nodeste"], ["Região"]]
norte: ['imgs/norte.webp', [25], [25], ["Norte"], ["Região norte"], ["Região"]]
centro_oeste: ['imgs/co.webp', [25], [25], ["Centro-Oeste"], ["Centro Oeste"], ["Região"]]
sudeste: ['imgs/sudeste.webp', [25], [25], ["Sudeste"], ["Região Sudeste"], ["Região"]]
sul: ['imgs/sul.webp', [25], [25], ["Sul"], ["Região Sul"], ["Região"]]
brasil: ["imgs/brasil.webp", [106, 106, 113, 39, 20], [91, 217, 302, 217, 113], ["AM", "PA", "MA", "AP", "RR"], ["Amazonas", "Pará", "Maranhão", "Amapá", "Roraima"], ["Estado", "Estado", "Estado", "Estado"]]
*/
var escolha = 0
var xy = 0
function random() {

  escolha = Math.floor(Math.random() * array.length);;
  xy = Math.floor(Math.random() * array[escolha][5].length);;

  document.getElementById('draw01').innerHTML = `<img width="500" height="500" src="` + array[escolha][0] + `"> <input id='resp' placeholder='` + array[escolha][5][xy] +`' style="position: absolute; top: ` + array[escolha][1][xy] + `px; left:` + array[escolha][2][xy] + `px; width: 75px;">`;

}
random()

function verify() {
    let x = document.getElementById("resp").value;
    let text;
    if (x.toLowerCase() == "não sei" || x.toLowerCase() == "n sei") {
      text = "Puxa vida... 😕 - é " + array[escolha][4][xy];
    }
    else if (x.toLowerCase() == (array[escolha][3][xy].toLowerCase()) || x.toLowerCase() == (array[escolha][4][xy].toLowerCase())) {
      text = "✅ Pro student - " + array[escolha][4][xy];
    } else {
      text = "❌ NOOB (não esqueça os acentos) - " + array[escolha][4][xy];
    }
    document.getElementById("verify").innerHTML = text;
  }