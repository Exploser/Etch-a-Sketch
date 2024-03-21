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
});
