const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Přepínání menu pro mobilní zobrazení
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Funkce pro spuštění animací hlavičky
const animateHeader = () => {
    // Hlavička přijíždí shora
    gsap.from("header", {
        y: -100, // Startovní pozice hlavičky nad obrazovkou
        opacity: 0, // Skrytí hlavičky před animací
        duration: 1, // Doba trvání animace
        ease: "power3.out", // Plynulý efekt
    });

    // Navigační odkazy animace
    gsap.from(".nav-links li", {
        opacity: 0,
        y: -20,
        stagger: 0.2, // Sekvenční zpoždění mezi odkazy
        duration: 1,
        ease: "power3.out",
    });

    // Tlačítko "Visit Github" animace
    gsap.from(".visit-btn", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "elastic.out(1, 0.3)", // Skákací efekt
    });

    // Ikona menu animace
    gsap.from("#menu-icon", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)", // Jemný zpětný efekt
        delay: 0.5, // Zpoždění animace
    });
};

// Úvodní obrazovka a animace obsahu
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const greeting = document.getElementById('greeting');
    const textSplit = greeting.textContent.split('');
    greeting.textContent = '';

    // Rozdělení textu do jednotlivých písmen
    textSplit.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        greeting.appendChild(span);
    });

    // Časová osa pro animaci uvítání
    const timeline = gsap.timeline();
    timeline.fromTo(
        '#greeting span',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1, // Sekvenční zobrazování písmen
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

    // Skrytí uvítací obrazovky a zobrazení hlavního obsahu
    timeline.to(introScreen, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 1,
        onComplete: () => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';

            // Animace obsahu po uvítání
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

            // Spuštění animace hlavičky
            animateHeader();
        },
    });
});

// Animace plakátů při scrollování
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const posters = document.querySelectorAll('.poster');

    posters.forEach((poster, index) => {
        if (window.innerWidth >= 768) {
            // Na desktopu s rotačním pohybem
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
            // Na menších obrazovkách
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
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".footer-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-fullscreen");

    // Detekce zobrazení sekce
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contactSection.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
});
