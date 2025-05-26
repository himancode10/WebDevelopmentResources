
// ------------FOR LOOP------------

const jonas=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','peter','Steven'],
    
];
for(let i=jonas.length-1; i>=0 ;i-- ){
    console.log(i,jonas[i]);
}
for(let exercise=1; exercise<4 ; exercise++){
    console.log(`----Starting exercise ${exercise}`);

    for(let rep=1;rep<6;rep++){
        console.log(`Exercise:${exercise} lifting weight repetition ${rep}`);
    }
}
//-------------while loop-------------
let i=0;
while(i<5){
    console.log(jonas[i]);
    i++;

}
