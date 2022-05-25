let themeBtn = document.getElementById("mode-selector");

function changeMode() {
    let body = document.getElementsByTagName('body')[0];
    let footer = document.getElementsByTagName('footer')[0];
    let h1 = document.getElementsByTagName('h1')[0];
    
    const darkModeOn = body.classList.contains('dark-mode');
    
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    themeBtn.classList.toggle('dark-mode');
    
    h1.textContent = "Dark Mode On"
    themeBtn.textContent = "Light Mode";
    
    if ( darkModeOn ){
        h1.textContent = "Light Mode On"
        themeBtn.textContent = "Dark Mode";
    }
}

themeBtn.addEventListener('click',changeMode);