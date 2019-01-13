const   grids   =   document.querySelectorAll('.grid');

window.addEventListener('load', function(){
    grids.forEach(function(grid){
        let columns = grid.getAttribute('columns');
        let rows    = grid.getAttribute('rows');

        grid.style.gridTemplateColumns = columns;
        grid.style.gridTemplateRows = rows;
    })
})