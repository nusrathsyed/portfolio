//Menu functions for the Home Projects and Skills section
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');  // This will toggle the visibility of the navigation links
}

// mouse hovering 
document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('body::after'); // Target the pseudo-element
    const x = e.clientX;
    const y = e.clientY;

    // Adjust position of the circle to follow the mouse
    const style = document.documentElement.style;
    style.setProperty('--mouse-x', `${x}px`);
    style.setProperty('--mouse-y', `${y}px`);
});