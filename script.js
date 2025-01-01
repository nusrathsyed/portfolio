//Menu functions for the Home Projects and Skills section
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');  // This will toggle the visibility of the navigation links
}

// Track mouse position relative to the entire document
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update CSS variables with the mouse position
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
});

// Ensure the effect stays at the right position when the page scrolls
document.addEventListener('scroll', () => {
    const mouseX = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mouse-x'));
    const mouseY = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mouse-y'));

    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
});

// Function to handle the 'View Code' link click event
const codeLinks = document.querySelectorAll('a');

codeLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'clicked' class from all links
        codeLinks.forEach(l => l.classList.remove('clicked'));

        // Add the 'clicked' class to the clicked link
        this.classList.add('clicked');
    });
});