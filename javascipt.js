let n = 16;
let rdmToggle = 0;

const mainGrid = document.querySelector(".main")

gridCreate(n)

function gridCreate(n){
for (i = 0;  i < (n*n); i++){
    const grid = document.createElement("div");
    mainGrid.appendChild(grid);
    size = (480/n);
    grid.style.width = size + "px";
    grid.style.height = size + "px";    
    // grid.style.backgroundColor ="lightblue";
    grid.style.border = "solid 1px darkgrey";
    grid.style.boxSizing ="border-box";
    let opac = 0;

    grid.addEventListener("mouseover",() => {
        if (rdmToggle == 1){
            grid.style.backgroundColor="rgb("+ getRandomInt() +","+ getRandomInt() +","+ getRandomInt() +")";
            opac =1;
            // console.log(getRandomInt())
        }
        grid.classList.add("hover");
        if (opac <1) {opac += 0.1;}
        grid.style.opacity = opac;
    })
}
}
function getRandomInt() {
    return Math.floor(Math.random() * 255);
  }

const clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    const clrGrid = document.querySelectorAll(".hover")
    clrGrid.forEach((clr) => {
        clr.classList.remove("hover");
        clr.style.backgroundColor='';
        clr.style.opacity = "";
        // I cannot reset opacity, due to insistence of using 'class' as tool to modify (hence the opac property is attached within the creation fucntion);
        // the quickest solution if we want to reset opacity is to make this button delete-create instead of clear.
    })
})

const newGrid = document.querySelector('.new_grid')

newGrid.addEventListener("click", () =>{
    const delGrid = document.querySelectorAll(".main>div")
    delGrid.forEach(del => del.remove()) 

    for (n=0 ; n<1 || n>100 || !Number.isInteger(parseFloat(n));){
        n = prompt("Let's make new grid! input side length! (enter integer between 1-100 for optimised reload time!)");
    }

    gridCreate(n)
    }


)

const rdmBut = document.querySelector('.random');
rdmBut.addEventListener("click", () => { 
    if (rdmToggle == 0) {
        rdmBut.textContent ="Random: on!";
        rdmToggle = 1;
    }
    else if (rdmToggle == 1) {
        rdmBut.textContent ="random: off!";
        rdmToggle = 0;

    }
})