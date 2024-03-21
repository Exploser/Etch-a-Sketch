document.addEventListener('DOMContentLoaded', () => {
    const gridBox = document.querySelector('.grid-box');
    const paintButton = document.querySelector('.paint');
    const eraserButton = document.querySelector('.eraser');
    const cleanButton = document.querySelector('.clean');

    let isPainting = true; // Default mode

    function generateGrid(size) {
        gridBox.innerHTML = ''; // Clear existing grid
        gridBox.style.display = 'grid';
        gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('mouseover', paintGridItem);
            gridBox.appendChild(gridItem);
        }
    }

    function paintGridItem(e) {
        if (isPainting) {
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = 'white';
        }
    }

    paintButton.addEventListener('click', () => {
        isPainting = true;
    });

    eraserButton.addEventListener('click', () => {
        isPainting = false;
    });

    cleanButton.addEventListener('click', () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => item.style.backgroundColor = 'white');
    });

    generateGrid(16); // Initialize a 16x16 grid
});
