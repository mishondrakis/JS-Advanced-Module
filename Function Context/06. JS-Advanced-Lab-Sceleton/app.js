function solve() {

    document.querySelector('#dropdown')
    .addEventListener('click', showMenu);
    let liElements = [...document.querySelectorAll('ul > li')];

    liElements.forEach(x => x.addEventListener('click', () => {
        let boxElement = document.getElementById('box');
        boxElement.style.backgroundColor = x.textContent;
    }));

    function showMenu() {
    let ul = document.querySelector('#dropdown-ul');
        if (ul.style.display == 'none') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
            document.getElementById('box').style.backgroundColor = 'rgb(114, 112, 112)';
        };
    };
};