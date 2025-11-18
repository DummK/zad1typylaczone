type DaneKwadrat = {
    typ: 'kwadrat',
    bok: number,
}
type DaneKolo = {
    typ: 'kolo',
    promien: number,
}
type DaneProstokat = {
    typ: 'prostokat',
    dlugosc: number,
    szerokosc: number,
}
type DaneTrojkat = {
    typ: 'trojkat',
    wysokosc: number,
    podstawa: number,
}

type FiguraGeometryczna = DaneKwadrat | DaneKolo | DaneProstokat | DaneTrojkat;

function obliczPole(figura: FiguraGeometryczna): number {
    if (figura.typ === 'kwadrat') {
        return figura.bok * figura.bok;
    } else if (figura.typ === 'kolo') {
        return Math.PI * Math.pow(figura.promien, 2);
    } else if (figura.typ === 'prostokat') {
        return figura.dlugosc * figura.szerokosc;
    } else if (figura.typ === 'trojkat') {
        return (figura.podstawa * figura.wysokosc) / 2;
    } else {
        throw new Error("Nieznany typ figury");
    }
}


let figura1:FiguraGeometryczna = {
    typ: 'kwadrat',
    bok: 34,
}
let figura3:FiguraGeometryczna = {
    typ: "trojkat",
    wysokosc: 12,
    podstawa: 6,
}

console.log(obliczPole(figura1));
console.log(obliczPole({
        typ: "kolo",
        promien: 67,
    }));
console.log(obliczPole(figura3))