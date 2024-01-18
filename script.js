const container = document.querySelector(".container");
const oneFoot = document.getElementsByClassName("oneFoot");
const fullRow = document.getElementsByClassName("fullRow");


const rowGenerator = () => {
    //const x = prompt("How many rows in this field?");
    rowInput = 20;
    //const y = prompt("how long?");
    rowLength = 30;
    createRow(rowInput, rowLength);
}

const createRow = (rowInput, rowLength) => {
    for(let i = 0; i < rowInput; i++){
        const row = document.createElement('div');
        row.className = "fullRow";
        for(let i = 0; i <= rowLength; i++){
            const cell = document.createElement('div');
            cell.className = "oneFoot";
            row.appendChild(cell);
        }
        container.appendChild(row);

        row.addEventListener('click', () => {
            const crop = prompt("what crop?");
            const cropSelection = document.querySelectorAll(".oneFoot")
            const distance = 10//Number(prompt("how many feet?"));
    
            switch (crop) {
                case "b":
                    for(let i = 0; i < distance; i++){
                        let bee = cropSelection[i].classList.add("beet")
                        //bee.style.backgroundColor = "blue";
                    }
                    
                    break;
                case "c":
                    for (let i = 0; i < distance; i++){
                        cropSelection[i].add("carrot");
                        carrot.style.backgroundColor = "pink";
                    }
                    
                    break;
            }
        })
        
    }


}



let beets = {
    days: 60,
    season:"spring, summer, winter, fall",
    fert: "low",
    rows: 4,
    window: 2,
    ppsize: 4,
    nextCrop: "regen",
    color: "lightCoral"
}

let carrots = {
    days: 60,
    season:"spring, summer, winter, fall",
    fert: "low",
    rows: 4,
    window: 2,
    ppsize: 4,
    nextCrop: "regen"
}

let scallions = {
    days: 60,
    season:"spring, summer, winter, fall",
    fert: "low",
    rows: 4,
    window: 3,
    ppsize: 4,
    nextCrop: "regen"
}