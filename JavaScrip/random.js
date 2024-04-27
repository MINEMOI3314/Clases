const columnaA = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]
const columnaB = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
]

const columnaC = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '/',
    '(',
    ')',
]

function generar(){
    let fraseA = columnaA[Math.floor(Math.random()*columnaA.length)]
    //console.log (fraseA);
    let fraseB = columnaB[Math.floor(Math.random()*columnaB.length)]
    //console.log (fraseB);
    let fraseC = columnaC[Math.floor(Math.random()*columnaC.length)]
    //console.log (fraseC);
    return `${fraseA} ${fraseB} ${fraseC}`
}

function mostrar(){
    const excusa = generar()
    console.log (excusa)
    document.getElementById("excusa").innerHTML = excusa
}

mostrar();