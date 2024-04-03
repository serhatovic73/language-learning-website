/* dark mod */
const ball = document.querySelector(".dark-mod-ball");
const items = document.querySelectorAll(".menu, .menu .levels, body , .footer, .dark-mod, .dark-mod i, .dark-mod .dark-mod-ball");
const body = document.body;
ball.addEventListener("click" , function(){
    ball.addEventListener('click', () => {
        items.forEach((item) => item.classList.toggle('active'));
    });
    ı
});
// Dark mod durumunu oturum süresince saklamak için kullanılan bir değişken
let isDarkMode = false;

// Sayfa yüklendiğinde dark modu başlatma
function initializeDarkMode() {
    const body = document.body;

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Dark modu açma veya kapatma işlevi
function toggleDarkMode() {
    const body = document.body;
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Sayfa yüklendiğinde dark modu başlatma
initializeDarkMode();

