const themeToggler = document.querySelector('input[name="theme-toggler"]')

themeToggler.addEventListener('change', (e) => {
    if (e.currentTarget.checked) {
        transition();
        document.querySelector('body').setAttribute('data-theme', 'dark');
        console.log("checked");
    } else {
        transition();
        document.querySelector('body').setAttribute('data-theme', 'light');
        console.log("Unchecked");
    }


});

function transition() {

    document.querySelector('body').classList.add('transition');
    setTimeout(() => {
        document.querySelector('body').classList.remove('transition');
    }, 2000);

}