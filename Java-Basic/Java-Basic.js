// This is an in-line comment.
/* This is a
multi-line comment */

/* cria uma variável chamada ourName. Em JavaScript, terminamos uma instrução com ponto e vírgula. Nomes de variáveis podem ser formados por números, letras e $ ou _, mas não podem conter espaços ou começar com um número. */
var myName;
var ourName;

/* Atribua o valor 7 para a variável a.*/
var a;
a = 7;

/* Atribua o conteúdo de a para a variável b.*/
var a;
a = 7;
var b;
b = a;
console.log(b)

/* Defina uma variável a com var e a inicialize com o valor de 9.*/
var a = 9;
console.log(a)

/* Crie duas novas variáveis de string: myFirstName e myLastName e atribua a elas os valores do seu primeiro e último nome, respectivamente. */
var myFirstName = "Paulo";
var myLastName = "Weber";
console.log(myFirstName)
console.log(myLastName)

/* Inicialize as três variáveis a, b e c com 5, 10, e "I am a" respectivamente para que eles não sejam undefined.*/
var a = 5;
var b = 10;
var c = "I am a";
console.log(a = a + 1);
console.log(b = b + 5);
console.log(c = c + " String!");

/* Modifique as declarações e atribuições existentes para que seus nomes usem camelCase .
Não crie novas variáveis.*/
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

/*Atualize o código para que ele use apenas a palavra- letchave.*/
let catName = "Oliver";
let catSound = "Meow!";

/*Altere o código para que todas as variáveis ​​sejam declaradas usando letou const. Use letquando quiser que a variável mude e constquando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com constpara estar em conformidade com as práticas comuns. Não altere as strings atribuídas às variáveis.*/
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Altere o 0para que a soma seja igual a 20 (SOMAR).
const sum = 10 + 10;
console.log(sum)

//Altere o 0para que a diferença seja 12 (SUBTRAIR).
const difference = 45 - 33;
console.log(difference)

//Altere o 0para que o produto seja igual a 80 (MULTIPLICAR).
const product = 8 * 10;
console.log(product)

//Altere o 0para que o quotientseja igual a 2 (DIVIDIR).
const quotient = 66 / 33;
console.log(quotient)

/*Incrementar um número com JavaScript
Altere o código para usar o operador ++ na variável myVar.*/
let myVar = 87;
myVar++;
console.log(myVar)

/*Decrementar um número com JavaScript
Altere o código para usar o operador -- na variável myVar.*/
let myVar1 = 11;
myVar1--;
console.log(myVar1)

/*Criar números decimais com JavaScript
Crie a variável myDecimal e dê a ela um valor decimal com uma parte fracional (e.g. 5.7).*/
const ourDecimal = 5.7;
var myDecimal = 5.7;
console.log(myDecimal)

/*Multiplicar dois decimais com JavaScript
Altere o 0.0 para que o produto seja igual a 5.0.*/
const product1 = 2.0 * 2.5;
console.log(product1)

/*Dividir um decimal por outro com JavaScript
Modifique 0.0 para que a variável quotient seja igual a 2.2.*/
const quotient1 = 4.4 / 2.0;
console.log(quotient1)

/* Descobrir o resto em JavaScript
O operador de resto % retorna o resto da divisão de dois números.

Exemplo

5 % 2 = 1 porque
Math.floor(5 / 2) = 2 (Quociente)
2 * 2 = 4
5 - 4 = 1 (Resto)
Uso
Na matemática, um número pode ser verificado como par ou ímpar por meio do resto da divisão do número por 2.

17 % 2 = 1 (17 é Ímpar)
48 % 2 = 0 (48 é Par)
Observação: o operador de resto às vezes é referido incorretamente como o operador de módulo. É muito semelhante ao módulo, mas não funciona adequadamente com números negativos.

Define o resto igual ao restante de 11 dividido por 3 usando o operador de restante (%).*/
const remainder = 11 % 3;
console.log(remainder)

/*Atribuir de modo composto com adição aumentada
Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, para que possamos dizer:

myVar = myVar + 5;
para adicionar 5 a myVar. Como este é um padrão tão comum, existem operadores que realizam uma operação matemática e atribuição em um passo.

Um desses operadores é o operador +=.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 seria exibido no console.

Converta as atribuições para a, b e c para usar o operador +=.*/
let a1 = 3;
let b1 = 17;
let c1 = 12;
a1 += 12;
b1 += 9;
c1 += 7;
console.log(a1,b1,c1)

/* Atribuir de modo composto com subtração aumentada
Como o operador +=, -= subtrai um número de uma variável.

myVar = myVar - 5;
vai subtrair 5 de myVar. Essa expressão pode ser reescrita assim:

myVar -= 5;
Converta as atribuições para a, b e c para usar o operador +=.*/
let a2 = 11;
let b2 = 9;
let c2 = 3;

// Altere apenas o código abaixo desta linha
a2 -= 6;
b2 -= 15;
c2 -= 1;
console.log(a2,b2,c2)

/*Atribuir de modo composto com multiplicação aumentada
O operador *= multiplica uma variável por um número.

myVar = myVar * 5;
multiplicará myVar por 5. Essa expressão pode ser reescrita assim:

myVar *= 5;
Converta as atribuições para a, b e c para usar o operador *=.*/
let a3 = 5;
let b3 = 12;
let c3 = 4.6;

// Altere apenas o código abaixo desta linha
a3 *= 5;
b3 *= 3;
c3 *= 10;
console.log(a3,b3,c3)

/*Atribuir de modo composto com divisão aumentada
O operador /= divide uma variável por outro número.

myVar = myVar / 5;
dividirá myVar por 5. Essa expressão pode ser reescrita assim:

myVar /= 5;
Converta as atribuições para a, b e c para usar o operador /=.*/
let a4 = 48;
let b4 = 108;
let c4 = 33;

// Altere apenas o código abaixo desta linha
a4 /= 12;
b4 /= 4;
c4 /= 11;
console.log(a4,b4,c4)

/*Escapar aspas literais em strings
Quando você estiver definindo uma sequência de caracteres você deve iniciar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: " ou ' dentro de sua string?

Em JavaScript, você pode escapar uma aspa para que não seja considerada como o fim de uma string ao colocar a barra invertida (\) na frente da aspa.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string, mas que deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

Alan said, "Peter is learning JavaScript".
Use barras invertidas para atribuir a string à variável myStr para que, se você fosse imprimi-la no console, veria:

I am a "double quoted" string inside "double quotes".*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr)

/*Cercar uma string com aspas simples
Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma tag <a> com vários atributos em aspas, tudo dentro de uma string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
Porém, isso se torna um problema se você precisar usar as aspas mais extremas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no início e no final. Mas se você tem aquela mesma aspa em algum lugar no meio, a string vai terminar mais cedo e lançará um erro.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Aqui badStr lançará um erro.

Na string goodStr acima, você pode usar ambas as aspas com segurança ao usar a barra invertida \ como um caractere de escapamento.

Observação: a barra invertida \ não deve ser confundida com a barra comum /. Elas não fazem a mesma coisa.

Altere a string fornecida para uma string com aspas simples no início e no final e sem caracteres de escapamento.

Nesse momento, a tag <a> na string usa aspas duplas em todo canto. Você precisará alterar as aspas mais externas para aspas simples, para que você possa remover os caracteres de escapamento.*/
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1)

/*Escapar sequências em strings
Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Há dois motivos para usar caracteres de escapamento:

Para permitir que você use caracteres que você pode não ser capaz de digitar do contrário, como o caractere de nova linha.
Para permitir que você represente várias aspas em uma string sem o JavaScript entender erroneamente o que você quis dizer.
Aprendemos isso no desafio anterior.

Código	Saída
\'	aspas simples
\"	aspas duplas
\\	barra invertida
\n	nova linha
\t	tab
\r	retorno de carro
\b	limite de palavra
\f	quebra de página
Note que a própria barra invertida deve ser escapada para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir em uma única variável myStr usando sequências de escapamento.

FirstLine
    \SecondLine
ThirdLine
Você precisará usar sequências de escapamento para inserir corretamente os caracteres especiais. Você também precisará seguir os espaçamentos assim como acima, sem espaços entre sequências de escapamento ou palavras.

Observação: a identação para SecondLine é alcançada com o caractere de espaçamento tab, e não com espaços.*/
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr2)

/*Concatenar strings com o operador mais
Em JavaScript, quando o operador + é usado com um valor de String, ele é chamado de operador de concatenação. Você pode criar uma nova string a partir de outras strings ao concatenar elas juntos.

Exemplo

'My name is Alan,' + ' I concatenate.'
Observação: cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-las.

Exemplo:

const ourStr = "I come first. " + "I come second.";
A string I come first. I come second. seria exibida no console.

Crie myStr a partir das strings This is the start. e This is the end. usando o operador +. Não se esqueça de incluir um espaço entre as duas strings.*/
const myStr3 = "This is the start. " + "This is the end.";
console.log(myStr3)

/*Concatenar strings com o operador mais igual
Também podemos usar o operador += para concatenar uma string no final de uma variável string existente. Isso pode ser muito útil para quebrar uma longa string em várias linhas.

Observação: cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-los.

Exemplo:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr agora deve ter como valor a string I come first. I come second..

Crie myStr em várias linhas concatenando essas duas strings: This is the first sentence. e This is the second sentence. usando o operador +=. Use o operador += de modo semelhante a como ele é mostrado no exemplo e certifique-se de incluir um espaço entre as duas strings. Comece atribuindo o primeiro texto para myStr, e então adicione o segundo texto.*/
let myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence.";
console.log(myStr4)

/*Criar strings com variáveis
Às vezes, você precisará criar uma string. Usando o operador de concatenação (+), você pode inserir uma ou mais variáveis em uma string que você está criando.

Exemplo:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr teria o valor da string Hello, our name is freeCodeCamp, how are you?.

Defina myName para uma string igual ao seu nome e construa myStr com myName em duas strings: My name is e and I am well!*/
const myName3 = "Paulo";
const myStr5 = "My name is " + myName3 + " and I am well!";
console.log(myStr5)

/*Adicionar variáveis para strings
Assim como podemos construir uma string em várias linhas através das strings literais, nós também podemos adicionar as variáveis para a string usando o operador mais igual (+=).

Exemplo:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr teria o valor freeCodeCamp is awesome!.

Defina someAdjective para uma string de pelo menos 3 caracteres e adicione para myStr usando o operador +=.*/
const someAdjective = "Special!";
let myStr6 = "Learning to code is ";
myStr6 += someAdjective;
console.log(myStr6)

/*Encontrar o tamanho de uma string
Você pode encontrar o tamanho de um valor de String ao escrever .length após a variável de string ou literal de string.

console.log("Alan Peter".length);
O valor 10 seria exibido no console. Observe que o caractere de espaço entre "Alan" e "Peter" também é contado.

Por exemplo, se nós criássemos uma variável const firstName = "Ada", poderíamos descobrir qual o tamanho da string Ada usando a propriedade firstName.length.

Use a propriedade .length para definir lastNameLength como o número de caracteres em lastName.

*/
// Configuração
let lastNameLength = 0;
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
lastNameLength = lastName.length;
console.log(lastNameLength)

/*Usar notação de colchetes para encontrar o primeiro caractere em uma string
Notação de colchetes é uma forma de pegar um caractere no índice especificado dentro de uma string.

A maioria das linguagens de programação modernas, como JavaScript, não começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido como indexação baseada em zero.

Por exemplo, o caractere no índice 0 da palavra Charles é C. Então, se const firstName = "Charles", você pode pegar o valor da primeira letra da string usando firstName[0].

Exemplo:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter teria o valor da string C.

Use notação de colchetes para encontrar o primeiro caractere na variável lastName e atribua a letra para a variável firstLetterOfLastName.

Dica: tente olhar o exemplo acima se você ficar travado.*/
// Configuração
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

// Altere apenas o código abaixo desta linha
firstLetterOfLastName = lastName1[0]; // Altere esta linha
console.log(firstLetterOfLastName)

/*Entender a imutabilidade das strings
Em JavaScript, valores String são imutáveis, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir produzirá um erro porque a letra B na cadeia de caracteres Bob não pode ser alterada para a letra J:

let myStr = "Bob";
myStr[0] = "J";
Observe que isso não significa que myStr não possa ser reatribuída. A única forma de alterar myStr seria atribuindo a ela um novo valor, deste modo:

let myStr = "Bob";
myStr = "Job";
Corrija a atribuição para myStr para que contenha o valor Hello World (string) usando a abordagem mostrada no exemplo acima.*/
// Configuração
let myStr7 = "Jello World";

// Altere apenas o código abaixo desta linha
myStr7 = "Hello World"; // Altere esta linha
// Altere apenas o código acima desta linha
console.log(myStr7)

/*Usar notação de colchetes para encontrar o enésimo caractere em uma string
Você também pode usar notação de colchetes para pegar caracteres em outras posições em uma string.

Lembre-se de que computadores começam contando do 0. Então, o primeiro caractere é na verdade o caractere na posição 0.

Exemplo:

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
secondLetterOfFirstName teria o valor da string d.

Vamos tentar definir thirdLetterOfLastName para ser igual a terceira letra da variável lastName usando notação de colchetes.

Dica: tente olhar o exemplo acima se você ficar travado.*/
// Configuração
const lastName2 = "Lovelace";

// Altere apenas o código abaixo desta linha
const thirdLetterOfLastName = lastName2[2]; // Altere esta linha
console.log(thirdLetterOfLastName)

/*Usar notação de colchetes para encontrar o último caractere em uma string
Para pegar a última letra de uma string, você pode subtrair um do tamanho da string.

Por exemplo, se const firstName = "Ada", você pode pegar o valor da última letra da string ao usar firstName[firstName.length - 1].

Exemplo:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter teria o valor da string a.

Use notação de colchetes para descobrir o último caractere na variável lastName.

Dica: tente olhar o exemplo acima se você ficar travado.*/
// Configuração
const lastName3 = "Lovelace";

// Altere apenas o código abaixo desta linha
const lastLetterOfLastName = lastName3[lastName.length - 1]; // Altere esta linha
console.log(lastLetterOfLastName)

/*Usar notação de colchetes para descobrir o enésimo caractere antes do último em uma string
Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o último caractere em uma string, para recuperar o enésimo caractere antes do último caractere.

Por exemplo, você pode pegar o valor da antepenúltima letra da string const firstName = "Augusta" usando firstName[firstName.length - 3]

Exemplo:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter teria o valor da string s.

Use notação de colchetes para descobrir o penúltimo caractere na string lastName.

Dica: tente olhar o exemplo acima se você ficar travado.*/
// Configuração
const lastName4 = "Lovelace";

// Altere apenas o código abaixo desta linha
const secondToLastLetterOfLastName = lastName4[lastName.length -2]; // Altere esta linha
console.log(secondToLastLetterOfLastName)

/*Palavras em branco
Você recebe frases com algumas palavras que faltam, como substantivos, verbos, adjetivos e advérbios. Em seguida, você preenche as peças que faltam com palavras de sua escolha de forma que a frase completa faça sentido.

Considere esta frase - Foi realmente ____ , e nós ____ nós mesmos ____ . Esta frase tem três peças faltando - um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-la. Podemos então atribuir a frase completa a uma variável da seguinte maneira:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
Neste desafio, fornecemos um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando palavras de sua escolha, junto com as palavras que fornecemos.

Você precisará usar o operador de concatenação de strings +para criar uma nova string, usando as variáveis ​​fornecidas: myNoun, myAdjective, myVerbe myAdverb. Você então atribuirá a string formada à wordBlanksvariável. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará levar em conta os espaços em sua string, para que a frase final tenha espaços entre todas as palavras. O resultado deve ser uma frase completa.*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Altere apenas o código abaixo desta linha
const wordBlanks = "My "+myNoun+", and we "+myVerb+" comer "+myAdjective+" muito "+myAdverb+"."; // Altere esta linha
// Altere apenas o código acima desta linha
console.log(wordBlanks)

/*Armazenar múltiplos valores em uma variável usando arrays JavaScript
Com as variáveis de array em JavaScript, podemos armazenar diversos dados em um único lugar.

Você começa uma declaração de um array com a abertura de um colchetes, terminando com o fechamento do colchetes e colocando vírgulas entre cada entrada, dessa forma:

const sandwich = ["peanut butter", "jelly", "bread"];
Modifique o novo array myArray para que contenha uma string e um número (nessa ordem).*/
const myArray = ["big bang", 123];
console.log(myArray)

/*Aninhar um array em outro array
Você também pode aninhar arrays dentro de outros arrays, como abaixo:

const teams = [["Bulls", 23], ["White Sox", 45]];
Isso é chamado um array multidimensional.

Crie um array aninhado chamado de myArray.*/
// Altere apenas o código abaixo desta linha
const myArray2 = [["Bulls, 23"], ["white Sox", 45]];
console.log(myArray2)

/*Acessar array de dados com índices
Podemos acessar os dados dentro de arrays usando indexes.

Os índices de um array são escritos na mesma notação com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um item do array. Assim como ocorre com as strings, os arrays usam indexação de base zero, de forma que o primeiro elemento de um array possui índice 0.


Exemplo

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
O console.log(array[0]) exibirá 50 e data terá o valor de 60.

Crie uma variável chamada myData e defina-a como igual ao primeiro valor de myArray usando notação de colchetes.*/
const myArray3 = [50, 60, 70];
const myData = myArray3[0]
console.log(myData)

/*Modificar dados de array com índices
Ao contrário das strings, as entradas de arrays são mutáveis e podem ser alteradas livremente, mesmo se o array foi declarado com const.

Exemplo

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray agora tem o valor [15, 40, 30].

Observação: não deve haver espaços entre o nome do array e os colchetes, como array [0]. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

Modifique o dado armazenado no índice 0 de myArray para um valor de 45.*/
// Configuração
const myArray4 = [18, 64, 99];

// Altere apenas o código abaixo desta linha
myArray4[0] = 45;
console.log(myArray4)

/*Acessar arrays multidimensionais com índices
Uma maneira de pensar em um array multidimensional é como um array de arrays. Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de colchetes refere-se ao próximo nível de entradas interno.

Exemplo

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
Neste exemplo, subarray tem o valor de [[10, 11, 12], 13, 14], nestedSubarray tem o valor de [10, 11, 12] e element tem o valor de 11 .

Observação: não deve haver nenhum espaço entre o nome do array e os colchetes como array [0][0] e até mesmo array [0] [0] não é permitido. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

Utilizando notação de colchetes, selecione um elemento de myArray de forma que myData seja igual a 8.*/
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray5[2][1];
  console.log(myData1)

  /*Manipular arrays com push()
Uma forma fácil de adicionar dados no final de um array é através da função push().

.push() recebe um ou mais parâmetros e "empurra" eles no final do array.

Exemplos:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 agora tem o valor de [1, 2, 3, 4] e arr2 tem o valor de ["Stimpson", "J", "cat", ["happy", "joy"]].

Empurre ["dog", 3] para o final da variável myArray.*/
// Configuração
const myArray6 = [["John", 23], ["cat", 2]];

// Altere apenas o código abaixo desta linha
myArray6.push(["dog", 3])
console.log(myArray6)

/*Manipular arrays com pop()
Outra forma de alterar os dados em um array é com a função .pop().

.pop() é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a uma variável. Em outras palavras, .pop() remove o último elemento de um array e retorna aquele elemento.

Qualquer tipo de entrada pode ser removida de um array - numbers, strings e até mesmo arrays aninhados.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
O primeiro console.log exibirá o valor 6 e o segundo exibirá o valor [1, 4].

Use a função .pop() para remover o último item de myArray e atribuir o valor removido para uma nova variável, removedFromMyArray.*/
// Configuração
const myArray7 = [["John", 23], ["cat", 2]];

// Altere apenas o código abaixo desta linha
const removedFromMyArray = myArray7.pop();
console.log(myArray7);
console.log(removedFromMyArray)

/*Manipular arrays com shift()
pop() sempre remove o último elemento de um array. E se você quiser remover o primeiro?

É aí que o .shift() vem a ser útil. Ele funciona da mesma forma que .pop(), exceto que ele remove o primeiro elemento ao invés do último.

Exemplo:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray teria o valor da string Stimpson e ourArray teria o valor de ["J", ["cat"]].

Use a função .shift() para remover o primeiro item de myArray e atribuir o valor removido para uma nova variável, removedFromMyArray.*/
// Configuração
const myArray8 = [["John", 23], ["dog", 3]];

// Altere apenas o código abaixo desta linha
const removedFromMyArray2 = myArray8.shift()
console.log(myArray8)
console.log(removedFromMyArray2)

/*Manipular arrays com unshift()
Você pode não apenas usar shift para remover elementos do início de um array, como também pode usar unshift para adicionar elementos ao início de um array, ou seja, adicionar elementos na posição inicial do array.

.unshift() funciona exatamente como .push(), mas, ao invés de adicionar o elemento ao final do array, unshift() adiciona o elemento no início do array.

Exemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Após o shift, ourArray teria o valor ["J","cat"]. Após o unshift, ourArray teria o valor ["Happy","J","cat"].

Adicione ["Paul", 35] ao início da variável myArray usando unshift().*/
// Configuração
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

// Altere apenas o código abaixo desta linha
myArray9.unshift(["Paul", 35])
console.log(myArray9)

/*Criar lista de compras
Crie uma lista de compras na variável myList. A lista deve ser um array multidimensional contendo diversos sub-arrays.

O primeiro elemento em cada sub-array deve conter uma string com o nome do item. O segundo elemento deve ser um número representando a quantidade, ou seja,

["Chocolate Bar", 15]
Deve haver pelo menos 5 sub-arrays na lista.*/
const myList = [["Chocolate Bar", 15], ["Bread", 30], ["Juice", 10], ["Grape", 5], ["Computer", 2]];
console.log(myList)

/*Escrever JavaScript reutilizável com funções
Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis chamadas de funções.

Aqui está um exemplo de uma função:

function functionName() {
  console.log("Hello World");
}
Você pode chamar ou invocar essa função ao usar seu nome seguido de parênteses, da seguinte forma: functionName(); Cada vez que a função é chamada, imprimirá no console a mensagem Hello World. Todo o código entre as chaves será executado toda vez que uma função for chamada.

Crie uma função chamada reusableFunction que imprime a string Hi World no console.
Chame a função.*/

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

/*Passar valores para funções com argumentos
Parâmetros são variáveis que atuam como espaços reservados para os valores que são passados para uma função, quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são entradas de (ou "passadas" para) uma função quando ela é chamada são conhecidos como argumentos.

Aqui está uma função com dois parâmetros, param1 e param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Então podemos chamar o testFun dessa forma: testFun("Hello", "World");. Passamos dois argumentos do tipo string, Hello e World. Dentro da função, param1 será igual à string Hello e param2 será igual à string World. Note que você poderia chamar o testFun novamente com diferentes argumentos e os parâmetros assumiriam o valor dos novos argumentos.

Crie uma função chamada functionWithArgs que aceita dois argumentos e exibe seus valores no console de desenvolvimento.
Chame a função com dois números como argumentos.*/
function functionWithArgs(Args1, Args2) {
  console.log (Args1 + Args2);
}
functionWithArgs(1,2);
functionWithArgs(7,9)

/*Retornar um valor de uma função com return
Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor para fora de uma função.

Exemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer tem o valor de 8.

plusThree recebe um argumento para num e retorna um valor igual a num + 3.

Crie uma função timesFive que aceita um argumento, multiplica ele por 5 e retorna o novo valor.*/
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0)

/*Conhecer o escopo global e funções
Em JavaScript, escopo refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função tem o escopo Global. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.

Variáveis que são declaradas sem a palavra-chave let ou const são automaticamente criadas no escopo global. Isso pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. Você sempre deve declarar suas variáveis com let ou const.

Usando let ou const, declare uma variável global chamada myGlobal fora de qualquer função. Inicialize-a com o valor de 10.

Dentro da função fun1, atribua 5 para oopsGlobal sem usar as palavras-chave var, let ou const.*/
// Declare a variável myGlobal abaixo desta linha
let myGlobal=10

function fun1() {
  // Atribua 5 para oopsGlobal aqui
oopsGlobal=5;
}

// Altere apenas o código acima desta linha

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*Conhecer o escopo local e funções
Variáveis que são declaradas dentro de uma função, assim como parâmetros das funções, possuem escopo local. Isso significa que elas são visíveis apenas dentro da função.

Aqui está uma função myTest com uma variável local chamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
A chamada da função myTest() vai exibir a string foo no console. A linha console.log(loc) (fora da função myTest) vai lançar um erro, já que loc não foi definido fora da função.

O editor possui dois console.log para ajudar você a ver o que está acontecendo. Verifique o console enquanto codifica para ver como muda. Declare uma variável local myVar dentro de myLocalScope e rode os testes.

Observação: o console ainda exibirá ReferenceError: myVar is not defined, mas isso não causará falha nos testes.*/

function myLocalScope() {
  // Altere apenas o código abaixo desta linha
const myVar = "foot"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Executar e verificar o console
// myVar não está definida fora do myLocalScope
console.log('outside myLocalScope', myVar);

/*Diferenciar escopo global e local em funções
É possível ter as variáveis local e global com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

Neste exemplo:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
A função myFun retornará a string Head porque a versão local da variável está presente.

Adicione uma variável local para a função myOutfit para sobrescrever o valor de outerWear com a string sweater.*/
// Configuração
const outerWear = "T-Shirt";

function myOutfit() {
  // Altere apenas o código abaixo desta linha
const outerWear = "sweater"
  // Altere apenas o código acima desta linha
  return outerWear;
}

myOutfit();

/*Entender o valor undefined retornado de uma função
Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de a função não ter uma instrução return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined.

Exemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum é uma função sem uma instrução return. A função vai alterar a variável global sum, mas o valor retornado da função é undefined.

Crie uma função addFive sem qualquer argumento. Essa função adiciona 5 à variávelsum, mas o valor retornado é undefined.*/
// Configuração
let sum1 = 0;

function addThree() {
  sum1 = sum1 + 3;
}

// Altere apenas o código abaixo desta linha
function addFive() {
  sum1 = sum1 + 5;
}

// Altere apenas o código acima desta linha

addThree();
addFive();

/*Atribuir com o valor retornado
Se você se lembrar de nossa discussão sobre como armazenar valores com o operador de atribuição, tudo à direita do sinal de igual é resolvido antes de o valor ser atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

Assuma que temos uma função predefinida chamada sum, que soma dois números. Então:

ourSum = sum(5, 12);
chamará a função sum, a qual retorna o valor 17 e então atribui este valor à variável ourSum.

Chame a função processArg com um argumento de 7 e atribui o retorno do seu valor para a variável processed.*/
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed)

/*Ficar na linha
Na Ciência da Computação, uma fila é uma estrutura de dados abstrata onde itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila.

Escreva a função nextInLine, que recebe um array (arr) e um número (item) como argumentos.

Adicione o número no final do array e então remova o primeiro elemento do array.

A função nextInLine deve, em seguida, retornar o elemento que foi removido.*/
function nextInLine(arr, item) {
  // Only change code below this line
  console.log("** arr:", arr);
  console.log("** item:", item);
  arr.push(item);
  console.log("** arr after pushing:", arr);
  let removed = arr.shift();
  console.log("** element removed:", removed);
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*Entender valores booleanos
Outro tipo de dado é o booleano. Booleanos podem ser apenas dois valores: true ou false. Eles basicamente são interruptores pequenos, onde true é ligado e false é desligado. Esses dois estados são mutuamente exclusivos.

Observação: valores booleanos nunca são escritos com aspas. As strings "true" e "false" não são booleanos e não tem nenhum significado especial em JavaScript.

Modifique a função welcomeToBooleans para que retorne true ao invés de false quando o botão de executar for clicado.*/
function welcomeToBooleans() {
  // Altere apenas o código abaixo desta linha

  return true; // Altere esta linha

  // Altere apenas o código acima desta linha
}

/*Usar lógica condicional com instruções if
instruções if são usadas para tomar decisões no código. A palavra-chave if diz ao JavaScript para executar o código nas chaves sob certas condições, definidas nos parênteses. Essas condições são conhecidas como condições Boolean e elas só podem ser true ou false.

Quando a condição for true, o programa executará as instruções dentro das chaves. Quando a condição booleana for false, as instruções dentro das chaves não serão executadas.

Pseudocódigo

if (condição é verdadeira) {
instrução é executada
}
Exemplo

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) retorna a string It was true e test(false) retorna a string It was false.

Quando test é chamado com o valor true, a instrução if avalia myCondition para verificar se é true ou não. Já que é true, a função retorna It was true. Quando chamamos test com um valor de false, myCondition não é true, a instrução nas chaves não é executada e a função retorna It was false.

Crie uma instrução if dentro da função para retornar Yes, that was true se o parâmetro wasThatTrue for true e retorne No, that was false caso contrário.*/
function trueOrFalse(wasThatTrue) {
  // Altere apenas o código abaixo desta linha
if (wasThatTrue) {
  return "Yes, that was true"
}
return "No, that was false"


  // Altere apenas o código acima desta linha

}


/*Comparar com o operador de igualdade
Há muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor booleano true ou false.

O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna true se eles são equivalentes ou false se não são. Observe que o operador de igualdade é diferente do operador de atribuição (=), que atribui o valor à direita do operador para uma variável à esquerda.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
Se myVal é igual a 10, o operador de igualdade retorna true, assim o código nas chaves será executado e a função retornará Equal. Caso contrário, a função retornará Not Equal. Para que o JavaScript possa comparar dois tipos de dados diferentes (por exemplo, numbers e strings), deve converter um tipo para outro. Isto é conhecido como coerção de tipo (casting ou type coercion). No entanto, uma vez que a faça, você pode comparar os termos da seguinte forma:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Adicione o operador de igualdade à linha indicada para que a função retorne a string Equal quando val for equivalente a 12.*/
// Configuração
function testEqual(val) {
  if (val == 12) { // Altere esta linha
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12"));

/*Comparar com o operador de igualdade estrita
Igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, ao contrário do operador de igualdade, que tenta converter ambos os valores em comparação a um tipo comum, o operador estrito de igualdade não realiza uma conversão de tipo.

Se os valores que são comparados tiverem valores diferentes, são considerados desiguais, e o operador de igualdade estrito retornará falso.

Exemplos

3 ===  3  // true
3 === '3' // false
No segundo exemplo, 3 é um tipo de Number e '3' é um tipo String.

Use o operador de igualdade estrita na instrução if, para que a função retorne a string Equal quando val for estritamente igual a 7.*/
// Configuração
function testStrict(val) {
  if (val === 7) { // Altere esta linha
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(7));

/*Praticar a comparação de diferentes valores
Nos últimos dois desafios, aprendemos sobre o operador de igualdade (==) e o operador de igualdade estrita (===). Vamos fazer uma breve revisão e praticar usando esses operadores mais uma vez.

Se os valores sendo comparados não são do mesmo tipo, o operador de igualdade fará a conversão de tipo e, então, avaliará os valores. No entanto, o operador de igualdade estrita vai comparar ambos os tipos de dados e os valores, sem converter de um tipo para outro.

Exemplos

3 == '3' retorna true porque JavaScript faz a conversão de tipo de string para número. 3 === '3' retorna false porque os tipos são diferentes e não é feita a conversão de tipo.

Observação: em JavaScript, você pode determinar o tipo de uma variável ou de um valor, com o operador typeof, como vemos a seguir:

typeof 3
typeof '3'
typeof 3 retorna a string number e typeof '3' retorna a string string.

A função compareEquality no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string Equal apenas quando os valores forem estritamente iguais.*/
// Configuração
function compareEquality(a, b) {
  if (a === b) { // Altere esta linha
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality("20", 20));
console.log(compareEquality("5", "5"));

/*Comparar com o operador de desigualdade
O operador de desigualdade (!=) é o oposto do operador de igualdade. Significa que não é igual e retorna false onde a igualdade retornaria true e vice-versa. Tal como o operador de igualdade, o operador de desigualdade converterá os tipos de dados de valores enquanto compara.

Exemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Adicione o operador de desigualdade != na instrução if para que a função retorne a string Not Equal quando val não for equivalente a 99.*/

// Configuração
function testNotEqual(val) {
  if (val != 99) { // Altere esta linha
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
console.log(testNotEqual(99));
console.log(testNotEqual("99"));
console.log(testNotEqual(12));
console.log(testNotEqual("12"));

/*Comparar com o operador de desigualdade estrita
O operador de desigualdade estrito (!==) é o oposto lógico do operador de igualdade estrito. Significa que "não é estritamente igual" e retorna false onde a igualdade estrita retornaria true e vice-versa. O operador de desigualdade estrita não converterá tipos de dados.

Exemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Adicione o operador de desigualdade estrita ao comando if para que a função retorne a string Not Equal quando val não é estritamente igual a 17*/

// Configuração
function testStrictNotEqual(val) {
  if (val !== 17) { // Altere esta linha
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("bob"));

/*Comparação com o operador maior que
O operador maior que ( >) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, ele retorna true. Caso contrário, ele retorna false.

Como o operador de igualdade, o operador maior que converterá tipos de dados de valores durante a comparação.

Exemplos

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
Adicione o operador maior que às linhas indicadas para que as instruções de retorno façam sentido.*/

function testGreaterThan(val) {
  if (val > 100) { // Altere esta linha
    return "Over 100";
  }

  if (val > 10) { // Altere esta linha
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
console.log(testGreaterThan(10))

/*Comparação com o operador maior ou igual a
O operador maior ou igual a ( >=) compara os valores de dois números. Se o número à esquerda for maior ou igual ao número à direita, ele retornará true. Caso contrário, ele retorna false.

Como o operador de igualdade, o operador maior ou igual a converterá os tipos de dados durante a comparação.

Exemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
Adicione o operador maior ou igual às linhas indicadas para que as instruções de retorno façam sentido.*/

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/*Comparação com o operador menor que
O operador menor que ( <) compara os valores de dois números. Se o número à esquerda for menor que o número à direita, ele retornará true. Caso contrário, ele retorna false. Como o operador de igualdade, o operador menor que converte tipos de dados durante a comparação.

Exemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Adicione o operador menor que às linhas indicadas para que as instruções de retorno façam sentido.*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

/*Comparação com o operador menor ou igual a
O operador menor ou igual a ( <=) compara os valores de dois números. Se o número à esquerda for menor ou igual ao número à direita, ele retornará true. Se o número à esquerda for maior que o número à direita, ele retorna false. Como o operador de igualdade, o operador menor ou igual a converte tipos de dados.

Exemplos

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Adicione o operador menor ou igual às linhas indicadas para que as instruções de retorno façam sentido.*/
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);