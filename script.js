const container = document.querySelector(".container");

const rowGenerator = () => {
    const rowInput = prompt("How many rows in this field?");
    x = rowInput;
    const rowLength = prompt("how long?");
    y = rowLength;
    createRow(x, y);
}

const createRow = (x, y) => {
    for(let i = 0; i < x; i++){
        const row = document.createElement('div');
        row.className = "row";
        for(let i = 0; i <= y; i++){
            const cell = document.createElement('div');
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row)
    }
    
}