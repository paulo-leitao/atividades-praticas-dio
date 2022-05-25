let themeBtn = document.getElementById('mode-selector');
let body = document.getElementsByTagName('body')[0];
let footer = document.getElementsByTagName('footer')[0];
let h1 = document.getElementsByTagName('h1')[0];


function changeMode() {
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    themeBtn.classList.toggle('dark-mode');    

    changeText();
}

function changeText() {
    h1.textContent = "Light Mode On"
    themeBtn.textContent = "Dark Mode";
    
    const darkModeOn = body.classList.contains('dark-mode');
    
    if ( darkModeOn ){
        h1.textContent = "Dark Mode On"
        themeBtn.textContent = "Light Mode";
    }
}

themeBtn.addEventListener('click',changeMode);