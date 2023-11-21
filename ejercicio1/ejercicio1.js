/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

let playerUruguay = players.filter (element => element.country === 'Uruguay');
let resultAwardsInfo = playerUruguay.map (element => element.goldenBall + element.goldenBoot);
let resultAwards = resultAwardsInfo.reduce((a, b) => a + b, 0);

//console.log (playerUruguay);
//console.log (resultAwardsInfo);
console.log (resultAwards);