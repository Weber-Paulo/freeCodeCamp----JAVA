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