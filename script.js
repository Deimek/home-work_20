//const size = 10;
// const table = '';
// for (let i = 1; i <= size; i++) {
//     const row = '';
//     for (let j = 1; j <= size; j++) {
//         const x = i * j;
//         row += `${x.toString().padStart(4, ' ')}`;
//     }
//     table += row + '\n';
// }
// console.log(table);

const size = 10;
const table = document.createElement('table');
document.body.append(table);

for (let i = 1; i <= size; i++) {

    const elemetsRow = document.createElement('tr');
    table.append(elemetsRow);

    for (let j = 1; j <= size; j++) {
        const x = i * j;

        const elementsCell = document.createElement('td');
        elementsCell.textContent = x;
        elemetsRow.append(elementsCell);

    }

}