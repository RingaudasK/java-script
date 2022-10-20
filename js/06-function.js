function sum(a,b) {
    return a + b;
}
const n1 = 7; 
const n2 = 5;
const n3 = 3;
const n4 = 1;

const s12 = sum(n1, n2);
console.log(`${n1} + ${n2} = ${s12}`);

const s34 = sum(n3, n4);
console.log(`${n3} + ${n4} = ${s34}`);

const s31 = sum(n3, n1);
console.log(`${n3} + ${n1} = ${s31}`);



function kainaSuPVM(kaina) {
    const PVM = 20;
    const koficientas = PVM / 100 + 1;
    const galutineKaina = kaina * koficientas;
    return galutineKaina;
}

const kainaBePVM1 = 5;
const kainaBePVM2 = 10;
const kainaBePVM3 = 100;

const kaina1 = kainaSuPVM(kainaBePVM1);
const kaina2 = kainaSuPVM(kainaBePVM2);
const kaina3 = kainaSuPVM(kainaBePVM3);

console.log(kaina1);
console.log(kaina2);
console.log(kaina3);