document.getElementById('Red').onclick = changered;
document.getElementById('Green').onclick = changeGreen;
document.getElementById('Blue').onclick = changeBlue;
document.getElementById('Yellow').onclick = changeYellow;

function changeGreen() {
    document.querySelector('body').style.backgroundColor = '#52C1AA';
    document.querySelector('body').style.color = 'white';
}

// Add functions for changeGreen, changeBlue, and changeYellow
// similar to changeRed, but with different colors. 
