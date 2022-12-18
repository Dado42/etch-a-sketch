const body = document.querySelector('body');

const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', function() {PromptForSize()});

let grid = document.querySelector('#grid');

ChangeGridSize(16);

function ColorBox(box, color){
    box.style.backgroundColor = color;
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
        box.addEventListener('mouseover', function() {ColorBox(box, 'black')});

        grid.appendChild(box);
    }

    body.appendChild(grid);
}