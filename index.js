/**
 *This code is horseshit to do for my tute week one. it is a fiboacci sequence. 
*/

let F0 = 0, F1 = 1;
let sequence = [0,1]


for (let index = 2; index <= 100; index++) {
    if (index <= 2) {
        console.log('F' + index + '=' + sequence[index]);
    }
    sequence[index] = sequence[index-1]+sequence[index-2];

    console.log('F' + index + '=' + sequence[index]);
}