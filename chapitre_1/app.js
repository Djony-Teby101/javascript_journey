// Chapitre 8: Array Améliorer.

//  Globale.
//  Convertir une liste en array.
const fruits=document.querySelectorAll('.fruits p');

// Methode 1: transformer une liste en array
const ArrayList=(item)=>{
    const fruitsArray= Array.from(fruits);
    const fruitNames=fruitsArray.map((fruit)=> fruit.textContent)
    console.log(fruitNames)
}


// ArrayList(fruits)

// Methode 2: Transformer une liste en array
const FruitsList=()=>{
    const fruitsArray=Array.from(fruits, (fruit)=>{
        return fruit.textContent;
    });

    console.log(fruitsArray)
}

// Filtrer la liste et recuperer un element.
const Array=[1,2,3,4,5]
let found= Array.find(e => e>3)
console.log(found)

// Array findIndex.

// Recuperer l'index d'un text dans un tableau.
const greeting=["hello","hi","byebye","goodbye","hi"];
let foundIndex=greeting.findIndex(e=>e==="hello")
console.log(foundIndex)


// filtrer sur une liste verifier si tous les items matchs avec la condition de filtrage.
const arrayNumber=[1,2,3,4,5,6,7,8]
let arrayEvery= arrayNumber.every(e=>e >=1);
console.log(arrayEvery)

let arraySome=arrayNumber.some(e=> e >6 )
console.log(arraySome)
