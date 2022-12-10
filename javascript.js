const grid = document.querySelector('#grid');
grid.style.width = '600px';
grid.style.height = '600px';
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
grid.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++){
    const box = document.createElement('div');
    box.style.borderStyle = 'solid';
    box.style.borderWidth = '1px';
    box.addEventListener('mouseover', function() {ColorBox(box, 'black')});

    grid.appendChild(box);
}

function ColorBox(box, color){
    box.style.backgroundColor = color;
}