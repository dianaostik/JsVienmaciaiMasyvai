


// 1 uzduotis
console.log("-------- 1 uzduotis -----------");

let arr = [];

for (let i = 0; i <= 29; i++) {
    arr[i] = Math.round(5 + Math.random() * 20);
}
console.log(arr);



// 2 uzduotis
console.log("-------- 2 uzduotis -----------");

//a)
console.log("----------- a)");
let elemMoreTen = 0;
for (let a = 0; a < arr.length; a++) {
    if (arr[a] > 10) {
        elemMoreTen++;
    }
}
console.log("Skaiciu didesniu, nei 10 =    " + elemMoreTen);

//b)
console.log("----------- b)");
let biggest = 0;
for (let d = 0; d < arr.length; d++) {
    if (arr[d] > biggest) {
        biggest = arr[d];
    }
}

console.log("Didziausia masyvo reiksme =   " + biggest);

//c)
console.log("----------- c)");
let sum = 0;
for (let b = 0; b < arr.length; b++) {
    sum += arr[b];
}
console.log("Visu skaiciu suma =   " + sum);

//d)
console.log("----------- d)");
let newArray = [];
for (let c = 0; c < arr.length; c++) {
    newArray.push(arr[c] - c);
}
console.log(newArray);

//e) Nerodo vienoj eilutei
console.log("----------- e)");
let arrayNum = [];
for (let d = 30; d < 39; d++) {
    arrayNum.push(Math.round(5 + Math.random() * 20));
}
console.log(arr);
console.log(arrayNum);

//f) 
console.log("----------- f)");
let poriniai = [];
let neporiniai = [];

for (let e = 0; e < arr.length; e++) {
    if (arr[e] % 2 == 0) {
        poriniai.push(arr[e]);
    }    else {
        neporiniai.push(arr[e]);
    }
}
console.log("Poriniai:");
console.log(poriniai);
console.log("Neporiniai:");
console.log(neporiniai);

//g)
console.log("----------- g)");

for (let p = 0; p < poriniai.length; p++) {
    if (poriniai[p] > 15) {
        poriniai[p] = 0;
    }    
}
console.log(poriniai);

//h
console.log("----------- h)");

console.log(arr);
for (let s = 0; s < arr.length; s++) {
    if (arr[s] > 10) {
        console.log("Didesnio, negu 10 indeksas yra:  " + s);
        break;
    }   
}

//i   ??? unset ???
console.log("----------- i)");


// 3 uzduotis
console.log("-------- 3 uzduotis -----------");

let letterArr = [];
var possible = "ABCD";
for (var d = 0; d < 200; d++) {
    letterArr += possible.charAt(Math.random() * possible.length) + " ";
}
console.log("[" + letterArr + "]");

let letterA = 0;
let letterB = 0;
let letterC = 0;
let letterD = 0;

for (let f = 0; f < letterArr.length; f++) {
    if (letterArr[f] == "A") {
        letterA++; 
    }
    if (letterArr[f] == "B") {
        letterB++; 
    }
    if (letterArr[f] == "C") {
        letterC++; 
    }
    if (letterArr[f] == "D") {
        letterD++; 
    }
}
console.log("A : " + letterA);
console.log("B : " + letterB);
console.log("C : " + letterC);
console.log("D : " + letterD);



// 4 uzduotis
console.log("-------- 4 uzduotis -----------");
// letterArr.sort();
// console.log(letterArr);


// 5 uzduotis
console.log("-------- 5 uzduotis -----------");



// 6 uzduotis
console.log("-------- 6 uzduotis -----------");
let arrFromNine1 = [];
let arrFromNine2 = [];

for (let l = 0; l < 100; l++) {
    arrFromNine1[l] = Math.round(100 + Math.random() * 899);   
    arrFromNine2[l] = Math.round(100 + Math.random() * 899);  
}
console.log(arrFromNine1);
console.log(arrFromNine2);

// 7 uzduotis ???
console.log("-------- 7 uzduotis -----------");

let arrNepasikartoja = [];
let arrElem = 0
let neetIt = true;

for (let i = 0; i < arrFromNine1.length; i++) {
    for (let a = 0; a < arrFromNine2.length; a++) {
        if (arrFromNine1[i] == arrFromNine2[a]) {
            neetIt = false;
        }
    }
    if (neetIt == true) {
        arrNepasikartoja[arrElem] = arrFromNine1[i];
        arrElem++;
    }else{
        neetIt = true;
    }  
}

console.log(arrNepasikartoja);


// 8 uzduotis
console.log("-------- 8 uzduotis -----------");

let arrDublicat = [];
let dublicatElem = 0
let needIt2 = false;

for (let i = 0; i < arrFromNine1.length; i++) {
    for (let a = 0; a < arrFromNine2.length; a++) {
        if (arrFromNine1[i] == arrFromNine2[a]) {
            needIt2 = true;
        }
    }
    if (needIt2 == true) {
        arrDublicat[dublicatElem] = arrFromNine1[i];
        dublicatElem++;
        needIt2 = false;
    }
}

console.log(arrDublicat);

// 9 uzduotis
console.log("-------- 9 uzduotis -----------");



// 10 uzduotis
console.log("-------- 10 uzduotis -----------");



// 11 uzduotis
console.log("-------- 11 uzduotis -----------");



