const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

function moveIndicator(li) {
    const icon = li.querySelector('.icon');

    // Get the position of the icon and indicator
    const iconRect = icon.getBoundingClientRect();
    const indicatorRect = indicator.getBoundingClientRect();

    // Find the vertical center of the icon
    const iconCenter = iconRect.top + (iconRect.height / 2);

    // Find the vertical center of the indicator
    const indicatorCenter = indicatorRect.top + (indicatorRect.height / 2);

    // Calculate the difference
    const difference = iconCenter - indicatorCenter;

    // Move the indicator
    indicator.style.transform = `translateY(${difference}px)`;
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

// Start on Home
list[0].classList.add('active');
moveIndicator(list[0]);