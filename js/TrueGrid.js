const   grids   =   document.querySelectorAll('.grid'),
        generateGrid = () =>
            grids.forEach( grid => {
                let columns = grid.getAttribute('columns');
                let rows    = grid.getAttribute('rows');
                grid.style.gridTemplateColumns = columns;
                grid.style.gridTemplateRows = rows;
            });

window.addEventListener('load', generateGrid)
