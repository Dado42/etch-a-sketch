const body = document.querySelector('body');

const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', function() {PromptForSize()});

let grid = document.querySelector('#grid');

ChangeGridSize(16);

function ColorBox(box, color){
    box.style.backgroundColor = color;
}

function DarkenBox(box){
    let shade = box.style.backgroundColor;
    shade = shade.substr(4);
    shade = shade.substr(0, shade.length-1);
    shade = shade.split(",");
    for(let i = 0; i < shade.length; i++){
        if(shade[i] > 25){
            shade[i] = shade[i] - 25;
        }
        else{
            shade[i] = 0;
        }
    }

    box.style.backgroundColor = `rgb(${shade[0]},${shade[1]},${shade[2]})`;
}

function PromptForSize() {
    let size = prompt("Set grid size between 1 and 100");
    if (size == null || isNaN(size) || size < 0 || size > 100){
        return;
    }

    ChangeGridSize(size);
}

function ChangeGridSize(size) {
    grid.remove();

    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquares = size*size;
    for (let i = 0; i < numSquares; i++){
        const box = document.createElement('div');
        box.style.backgroundColor = 'rgb(255,255,255)';
        box.addEventListener('mouseover', function() {DarkenBox(box)});

        grid.appendChild(box);
    }

    body.appendChild(grid);
}