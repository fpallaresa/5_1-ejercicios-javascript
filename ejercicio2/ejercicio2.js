/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

/* 
    1) Muestra por consola el listado de nombres de los millonarios
*/  

let millionaireList = forbesList.map(element => element.name);
console.log('El resultado del ejercicio 1 es : ' + millionaireList);

/*    
    2) Muestra por consola (true/false) si está Amancio en la lista

*/

let verificationName = (element) => {

    let isPresent = forbesList.find(person => person.name === element) !== undefined;
      console.log('El resultado del ejercicio 2 es : ' + isPresent);
  };
  
  verificationName('Amancio');

/*
    3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
*/

let patrimonyAmount = forbesList.map(element => element.amount / element.age);
console.log('El resultado del ejercicio 3 es : ' + patrimonyAmount);

/*
    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes 
*/
    
let listAge = forbesList.map (element => element.age);
let resultSumAge = listAge.reduce((a, b) => a + b, 0);
let numberObjects = Object.keys(forbesList).length;
let forbesAverageAge = resultSumAge / numberObjects;

console.log('El resultado del ejercicio 4 es : ' + forbesAverageAge);

/*
    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
*/

let forbesListTech = forbesList.filter(element => element.industry === 'Technology');
let forbesListTechAmount = forbesListTech.map(element => element.amount);
let sumForbesListTechAmount = forbesListTechAmount.reduce ((a, b) => a + b, 0); 
console.log('El resultado del ejercicio 5 es : ' + sumForbesListTechAmount);


/*
    6) Muestra por consola el millonario más joven que no sea de EEUU
*/

let nonEEUU = forbesList.filter(element => element.country !== 'EEUU');
let youngNonEEUU = nonEEUU.reduce( function(youngest, list){
    return (youngest.age === undefined || youngest.age >= list.age) ? list : youngest;
},{});
console.log('El resultado del ejercicio 6 es : ' + youngNonEEUU.name);


/*
    7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
*/


let eeuuList = forbesList.filter(element => element.country === 'EEUU' );
let eeuuListAmountSort = eeuuList.sort((a, b) => b.amount - a.amount);
let eeuuListTop5 = eeuuListAmountSort.slice(0,5);
let eeuuTop1 = eeuuListTop5.slice(0, 1)[0];
console.log('El resultado del ejercicio 7 es : ' + eeuuTop1.name);


/*
    8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

let googleMicrosoftList = forbesList.filter(element => element.company === 'Microsoft' || element.company === 'Google');
let googleMicrosoftListAge = googleMicrosoftList.map (element => element.age);
let resultSumGoogleMicrosoftAge = googleMicrosoftListAge.reduce((a, b) => a + b, 0);
let numberObjectsGoogleMicrosoft = Object.keys(googleMicrosoftList).length;
let googleMicrosoftAverageAge = resultSumGoogleMicrosoftAge / numberObjectsGoogleMicrosoft;

let googleMicrosoftListAmount = googleMicrosoftList.map (element => element.amount);
let resultSumGoogleMicrosoftAmount = googleMicrosoftListAmount.reduce((a, b) => a + b, 0);
let googleMicrosoftAverageAmount = resultSumGoogleMicrosoftAmount / numberObjectsGoogleMicrosoft;

console.log('El resultado del ejercicio 8 es: Media edad ' + googleMicrosoftAverageAge + ' años y Media dinero ' + googleMicrosoftAverageAmount);
