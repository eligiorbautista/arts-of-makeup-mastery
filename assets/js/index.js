const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
    /* This will run if the hamburger btn / toggle btn is clicked */
    dropDownMenu.classList.toggle('open');

    /* Check if dropdown menu is open and change icon to x if it is open */
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

window.addEventListener('resize', closeDropDownMenu);
window.addEventListener('scroll', closeDropDownMenu);

function closeDropDownMenu() {
    if (window.innerWidth > 992 || window.scrollY > 0) {
        if (dropDownMenu.classList.contains('open')) {
            /* close dropdown menu */
            dropDownMenu.classList.remove('open');
            /* change icon to hamburger */
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    }
}


