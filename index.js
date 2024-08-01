//2-masala
// function birlashtir(massiv) {
//     let bittaMatn = '';
//     for (const soz of massiv) {
//         bittaMatn += soz;
//     }
//     return bittaMatn;
// }
// const massiv = ["olma" ,"anjir","nok", "shaftoli","uzum"];
// console.log(birlashtir(massiv));
//3-masal
// function kattaHarflarga(massiv) {
//     let kattaHarflarMassiv = [];
//     for (const soz of massiv) {
//         kattaHarflarMassiv.push(soz.toUpperCase());
//     }
//     return kattaHarflarMassiv;
// }
// const massiv = ["anor", "olma", "shaftoli", "anjir"];
// console.log(kattaHarflarga(massiv));
//4-masal
// function kopaytmaHisobla(massiv) {
//     let kopaytma = 1;
//     for (const son of massiv) {
//         kopaytma *= son;
//     }
//     return kopaytma;
// }
// const massiv = [2, 3, 4, 5];
// console.log(kopaytmaHisobla(massiv));
//6-masal
// function teskariMassiv(massiv) {

//     let yangiMassiv = [];
//     for (const element of massiv) {
//         yangiMassiv.unshift(element);
//     }
//     return yangiMassiv;
// }
// const massiv = [1, 2, 3, 4, 5];
// console.log(teskariMassiv(massiv));
// 7-masal
// function indekslarMassivi(massiv) {
//     let indekslar = [];
//     let indeks = 0; 
//     for (const element of massiv) {
//         indekslar.push(indeks);
//         indeks++;
//     }
//     return indekslar;
//}
// const massiv = ['a', 'b', 'c', 'd'];
// console.log(indekslarMassivi(massiv));
//10-maslaa
// function splitArrayBySign(arr) {
//     let positiveArray = []; 
//     let negativeArray = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             positiveArray.push(arr[i]); 
//         } else {
//             negativeArray.push(arr[i]);
//         }
//     }
//     return {
//         positive: positiveArray,
//         negative: negativeArray
//     };
// }
// const originalArray = [5, -3, 2, -7, 0, 8, -1];
// const result = splitArrayBySign(originalArray);
// console.log(result);
//11-masala
// function repeatArray(arr, n) {
//     let repeatedArray = [];
//     for (let i = 0; i < n; i++) {
//         for (const item of arr) {
//             repeatedArray.push(item);
//         }
//     }
//     return repeatedArray;
// }
// const originalArray = [3, 2, 1];
// const n = 3;
// const result = repeatArray(originalArray, n);
// console.log(result);
//12-masala
// function toString(arr) {
//     return arr.map(element => element.toString());
// }
// 13 masala
// let arr = [1,2,3,4,5,6,7];
// let res = arr.map(function(v,i) {
//     if (i % 2 == 0) {
//         return v
//     }
// })
// console.log(res);
// let arr = [1,2,3,4,5,6,7];
// let res = arr.map(function(v,i) {
//     if (i % 2 == 0) {
//         return v
//     }
// })
// console.log(res);

// 14 masala
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum  = 0;
// let res = arr.filter(function(v) {
//     if (v % 2 == 1) {
//         return sum += v
//     }
// })
// console.log(sum);

// 15 masala
// let num= [1, 3, 2, 1, 5, 3, 5, 5, 2];
// let max = [];
// let min = [];
// let res = num.sort(function (a,b) {
//     return a - b
// });
// console.log(res);
// 16 masala
// let arr = [1,2,3,4,5,6,7];
// let narr = [];
// let res = arr.forEach(function (a) {
//     narr.push(a * 2)
// })
// console.log(narr);
// 18 masala
// let massiv = [1,2,3,4,5,6,7,8,9];
// let narr = [];
// let res = massiv.map(function(a) {
//     narr.push(a.toString()*2);
// });
// console.log(narr);

// 19 masala
// let arr= [1, 'apple', 3, 'banan', true, 'cherry', 42];
// let newArray = [];
// let res = narr.filter(function (a) {
//     if (typeof a != 'string') {
//         narr.push(a)
//     }
// });
// console.log(arr);

// 20 masala
// let arr = ['olma' ,' ', 'nok', ' ','limon'];
// let counter = 0;
// let res = arr.filter(function (v , i) {
//     if (i === "") {
//         return counter++;
//     }
// })
// console.log(counter)
// 22 maslal
// let arr= [1,2,8, 3,4,5];
// let max = [];
// let res = arr.sort(function (a ,b) {
//     if (b - a) {
//         return max.push(b[1])
//     }
// })
// console.log(max);