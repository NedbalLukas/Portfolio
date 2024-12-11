document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ** Animace pro Úvodní obrazovku **
    const introScreen = document.getElementById('intro-screen');
    const greeting = document.getElementById('greeting');
    const timeline = gsap.timeline();
    
    timeline.fromTo(
        '#greeting', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Po animaci intro obrazovky
    timeline.to(introScreen, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 1,
        onComplete: () => {
            introScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }
    });

    // ** Animace pro Karty v sekci "Zkušenosti" **
    const experienceCards = document.querySelectorAll('.grid-card');
    experienceCards.forEach(card => {
        gsap.fromTo(
            card, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true
                }
            }
        );
    });

    // ** Animace pro Záhlaví (menu) **
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { 
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out" 
            });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { 
                scale: 1, 
                color: "#fff", // Zpět na původní barvu
                duration: 0.4,
                ease: "power2.out" 
            });
        });
    });

    // ** Animace pro Scrollování sekcí **
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.fromTo(
            section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true
                }
            }
        );
    });

    // ** Mobilní Menu Animace - Vylepšení **
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');
    let menuOpen = false;

    // Funkce pro otevření/zavření menu
    menuIcon.addEventListener('click', () => {
        if (!menuOpen) {
            // Otevření menu s animací
            gsap.to(mobileMenu, {
                opacity: 1,
                scale: 1.1, // Zvětšení menu pro lepší efekt
                x: 0, // Posunutí na středu obrazovky
                duration: 1.2,
                ease: "power2.out",
                display: "flex"
            });

            // Animace položek menu s opožděním pro lepší vizuální efekt
            gsap.fromTo(
                ".mobile-links li",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
            );

            menuOpen = true;
        } else {
            // Zavření menu s animací
            gsap.to(mobileMenu, {
                opacity: 0,
                scale: 0.9, // Zmenšení menu při zavření
                x: '100%', // Posunutí mimo obrazovku
                duration: 0.8,
                ease: "power2.in",
                display: "none"
            });
            menuOpen = false;
        }
    });

    // Funkce pro kliknutí na sekci a zavření menu
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    scale: 0.9, // Zmenšení při zavírání
                    x: '100%',
                    duration: 0.8,
                    ease: "power2.in",
                    display: "none"
                });
                menuOpen = false;
            }
        });
    });

    // ** Animace pro Kontakt sekci **
    const contactContent = document.querySelector('#contact .contact-content');
    gsap.fromTo(
        contactContent, 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        }
    );

    // ** Animace pro kontaktní odkazy **
    const contactLinks = document.querySelectorAll("#contact .contact-link");
    contactLinks.forEach((link, index) => {
        gsap.fromTo(
            link, 
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // ** Animace pro obrázky v projektech **
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach((image, index) => {
        gsap.fromTo(
            image,
            { opacity: 0, scale: 1.1 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true
                }
            }
        );
    });
});
