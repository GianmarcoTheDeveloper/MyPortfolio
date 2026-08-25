const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

function moveIndicator(item) {
    const itemTop = item.offsetTop;
    const firstItemTop = list[0].offsetTop;

    const y = itemTop - firstItemTop;

    indicator.style.transform = `translateY(${y}px)`;
}

function activeLink() {
    list.forEach((li) => {
        li.classList.remove('active');
    });

    this.classList.add('active');

    moveIndicator(this);
}

list.forEach((li) => {
    li.addEventListener('click', activeLink);
});

// Start with the first item selected
list[0].classList.add('active');
moveIndicator(list[0]);