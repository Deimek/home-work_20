//const size = 10;
// let table = '';
// for (let i = 1; i <= size; i++) {
//     let row = '';
//     for (let j = 1; j <= size; j++) {
//         let x = i * j;
//         row += `${x.toString().padStart(4, ' ')}`;
//     }
//     table += row + '\n';
// }
// console.log(table);

const size = 10;
let table = document.createElement('table');
document.body.append(table);

for (let i = 1; i <= size; i++) {

    let elemetsRow = document.createElement('tr');
    table.append(elemetsRow);

    for (let j = 1; j <= size; j++) {
        let x = i * j;

        let elementsCell = document.createElement('td');
        elementsCell.textContent = x;
        elemetsRow.append(elementsCell);

    }

}