selector(".menu").addEventListener('click', function()
{
    console.log('click');
    this.classList.toggle('open');

    selector('header').classList.toggle('open');
    selector('.overlay').classList.toggle('open');
});

console.log('Hello');

function selector(s) {
    return document.querySelector(s)
}