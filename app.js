console.log("Flödesövningar");

// let unPeeledPotatoes = 10;
// for (let i = 0; i < 10 ; i++) {
//     unPeeledPotatoes = unPeeledPotatoes -1;
//     console.log(`Du har ${unPeeledPotatoes} potatisar kvar att skala`)
    
// }

let marbles = 0
for (let i = 0; i < 5; i++) {
    marbles = marbles + 1
    console.log(`Du har skopat upp ${marbles} glaskulor`)
    
}

marbles = 0
while(marbles < 5 ){
    
    marbles++
    console.log(`du har skopat upp ${marbles} glasskulor`)
    
}
let pushUps = 0;
for (let i = 0; i < 10; i++) {
    pushUps++
    console.log(`Du har gjort ${pushUps} av 10 armhävningar`)
/*--------------------------------------------------------------*/ 
}
let pushUps = 0;
while(pushUps < 10){
    pushUps++
    console.log(`Du har gjort ${pushUps} av 10 armhävningar`)
}
/*-------------------------------------------------------------*/

console.log("Nu ska vi koka kaffe och vi behöver Kaffe och Vatten")
let kaffe = 5;
let vatten = 5;
while (kaffe && vatten > 0) {
    console.log(`Du har ${kaffe} och ${vatten} vatten`)
    console.log("Det kommer att gå åt 1 Kaffe och 1 Vatten Varje gång du kokar en ny kopp");
    kaffe--
    vatten--

}
console.log("Du har slut på ingridienser")