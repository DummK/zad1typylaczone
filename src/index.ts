type FiguraGeometryczna = {
    typ: string,

    bok: number | undefined,
    promien: number | undefined,
    dlugosc: number | undefined,
    szerokosc: number | undefined,
    wysokosc: number | undefined,
    podstawa: number | undefined,
}

function obliczPole(figura: FiguraGeometryczna):number {
    if(figura.typ === 'kwadrat') {
        if(typeof figura.bok === 'number') {
            return Math.pow(figura.bok, 2);
        }
        else {
            throw new Error(`${figura.bok} jest nie zdefiniowana`);
        }
    }
    else if(figura.typ === 'kolo') {
        if(typeof figura.promien === 'number') {
            return Math.PI * Math.pow(figura.promien, 2);
        }
        else {
            throw new Error(`${figura.promien} jest nie zdefiniowana`);
        }
    }
    else if(figura.typ === 'prostokat') {
        if(typeof figura.dlugosc === 'number' && typeof figura.szerokosc === 'number') {
            return figura.dlugosc * figura.szerokosc;
        }
        else {
            throw new Error(`${figura.dlugosc} lub ${figura.szerokosc} jest nie zdefiniowana`);
        }
    }
    else if(figura.typ === 'trojkat') {
        if(typeof figura.wysokosc === 'number' && typeof figura.podstawa === 'number') {
            return (figura.podstawa * figura.wysokosc)/2;
        }
        else {
            throw new Error(`${figura.wysokosc} lub ${figura.podstawa} jest nie zdefiniowana`);
        }
    }
    else {
        throw new Error("Błędna nazwa figury");
    }
}

let figura1:FiguraGeometryczna = {
    typ: "kwadrat",
    bok: 12,
    promien: undefined,
    dlugosc: undefined,
    szerokosc: undefined,
    wysokosc: undefined,
    podstawa: undefined,
}
let figura2:FiguraGeometryczna = {
    typ: "trapez",
    bok: 1234,
    promien: 64363,
    dlugosc: 6565,
    szerokosc: 53452,
    wysokosc: 2333,
    podstawa: 11,
}
let figura3:FiguraGeometryczna = {
    typ: "trojkat",
    bok: undefined,
    promien: undefined,
    dlugosc: undefined,
    szerokosc: undefined,
    wysokosc: 12,
    podstawa: undefined,
}

console.log(obliczPole(figura1));
console.log(obliczPole({
    typ: "kolo",
    bok: undefined,
    promien: 5,
    dlugosc: undefined,
    szerokosc: undefined,
    wysokosc: undefined,
    podstawa: undefined,
}));
console.log(obliczPole(figura2));//daje błąd
console.log(obliczPole(figura3))//daje błąd