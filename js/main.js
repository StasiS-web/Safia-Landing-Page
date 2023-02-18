/*=============== CHANGE THEME FROM LIGHT TO DARK THEME ===============*/ 
const themeBtn = document.querySelector('#switcher');

themeBtn.addEventListener('change', (e) => {
    if(e.target.checked) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        window.localStorage.setItem('#switcher', 'light');
    }
    else{
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('#switcher', 'dark');
    }
});
