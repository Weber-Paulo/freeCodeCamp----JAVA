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