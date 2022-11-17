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