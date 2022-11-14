let arr1 = [

    [2, 2, 2],
    [1, 3, 4],
    [6, 1, 5],

];

let arr2 = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

let arrR = [
    [],[],[],
];

for (let i = 0; i < 3; i++) {
    for(let j= 0; j < 3; j++) {
        arrR[i][j] = arr1[i][j] * arr2[j][i];
    }

}

console.log(arrR);