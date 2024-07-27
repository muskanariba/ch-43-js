
function deleterow(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}

var count = 0;
function increase (a){
    count+= a
    document.getElementById('counter').innerHTML= count
}

function decrease (a){
    count+= a
    document.getElementById('counter').innerHTML= count
}

