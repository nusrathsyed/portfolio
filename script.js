//Menu functions for the Home Projects and Skills section
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');  // This will toggle the visibility of the navigation links
}

// mouse hovering 
document.addEventListener("mousemove", (e) => {
    // Use pageX and pageY to account for scrolling
    document.documentElement.style.setProperty("--mouse-x", `${e.pageX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.pageY}px`);
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