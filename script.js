const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const email = event.target.querySelector("input[type='email']").value;

    
    alert(`Form submitted! Email: ${email}`);
});