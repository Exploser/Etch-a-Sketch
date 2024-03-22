document.addEventListener('DOMContentLoaded', (event) => {
    const gridBox = document.querySelector('.grid-box');
    const paintButton = document.querySelector('.paint');
    const eraserButton = document.querySelector('.eraser');
    const cleanButton = document.querySelector('.clean');
    const colorPicker = document.getElementById('colorPicker');

    let isPainting = true; // Default mode

    // Add an event listener for the 'change' event
    colorPicker.addEventListener('change', function() {
        // Log the current color value to the console
        console.log('Selected color:', this.value);
    });


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
    
    colorPicker.addEventListener('change', function() {
        // Log the current color value to the console
        console.log('Selected color:', this.value);
    });


    generateGrid(16); // Initialize a 16x16 grid replace the magic number
});