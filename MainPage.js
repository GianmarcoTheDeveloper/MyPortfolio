const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

const indicatorBaseRect = indicator.getBoundingClientRect();
const indicatorBaseCenter = indicatorBaseRect.top + (indicatorBaseRect.height / 2);
 
function moveIndicator(li) {
    const icon = li.querySelector('.icon');
 
    // Get the position of the icon
    const iconRect = icon.getBoundingClientRect();
 
    // Find the vertical center of the icon
    const iconCenter = iconRect.top + (iconRect.height / 2);
 
    // Calculate the difference from the indicator's ORIGINAL position
    const difference = iconCenter - indicatorBaseCenter;
 
    // Move the indicator (this is now an absolute offset from its
    // untransformed spot, computed fresh every time — no accumulation)
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
 