const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const greeting = document.getElementById('greeting');
    const textSplit = greeting.textContent.split('');
    greeting.textContent = '';
    textSplit.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        greeting.appendChild(span);
    });
    const timeline = gsap.timeline();
    timeline.fromTo(
        '#greeting span',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1, 
        }
    );
    timeline.to(
        '#greeting',
        {
            textShadow: '0px 0px 15px rgba(255,255,255,0.7)',
            duration: 0.5,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut",
        },
        '-=0.5'
    );
    timeline.to(introScreen, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 1,
        onComplete: () => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            gsap.fromTo(
                mainContent,
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                }
            );
            animateHeader();
        },
    });
});
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const posters = document.querySelectorAll('.poster');
    posters.forEach((poster, index) => {
        if (window.innerWidth >= 768) {
            gsap.fromTo(
                poster,
                {
                    x: index % 2 === 0 ? '100%' : '-100%',
                    rotation: 30,
                    opacity: 0,
                },
                {
                    x: '0%',
                    rotation: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: poster,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                    },
                }
            );
        } else {
            gsap.fromTo(
                poster,
                {
                    x: index % 2 === 0 ? '100%' : '-100%',
                    opacity: 0,
                },
                {
                    x: '0%',
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: poster,
                        start: 'top 90%',
                        end: 'top 30%',
                        scrub: true,
                    },
                }
            );
        }
    });
});
const menuicon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-links a');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
let menuOpen = false;
menuIcon.addEventListener('click', () => {
    if (!menuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});
sections.forEach(section => observer.observe(section));
function openMenu() {
    menuOpen = true;
    mobileMenu.classList.add('open');
    mobileMenu.style.display = 'flex';

    menuIcon.classList.add('active');

}
function closeMenu() {
    menuOpen = false;

    mobileMenu.classList.add('closing');
    setTimeout(() => {
        mobileMenu.classList.remove('open', 'closing');
        mobileMenu.style.display = 'none';
    }, 300);

    menuIcon.classList.remove('active');
}

