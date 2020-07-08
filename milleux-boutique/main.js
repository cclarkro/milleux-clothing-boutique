
// Toggle responsive class on nav when icon is clicked
const navMenu = () => {
    const menuButton = document.querySelector('.fa-bars');
    const nav = document.querySelector('.mobile-section');

    menuButton.addEventListener('click', () => {
        // Toggle Responsive Class  
           nav.classList.toggle('responsive');

       }); 

}

navMenu();

// Close menu (responsive class) on nav when exit button is clicked

const navClose = () => {
    const nav = document.querySelector('.mobile-section');
    const exitButton = document.querySelector('.fa-times');

    exitButton.addEventListener('click', () => {
        // Turn off Responsive Class
            nav.classList.remove('responsive');

    });


} 

navClose();