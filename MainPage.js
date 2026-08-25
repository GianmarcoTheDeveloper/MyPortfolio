const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

function activeLink() {
    // Remove active from all links
    list.forEach((li) => {
        li.classList.remove('active');
    });

    // Add active to clicked link
    this.classList.add('active');

    // Calculate the position of the clicked item
    const position = this.offsetTop - list[0].offsetTop;

    // Move the indicator
    indicator.style.transform = `translateY(${position}px)`;
}

list.forEach((li) => {
    li.addEventListener('click', activeLink);
});

// Set Home as the starting position
list[0].classList.add('active');
indicator.style.transform = 'translateY(0px)';