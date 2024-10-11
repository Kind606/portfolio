// document.addEventListener('DOMContentLoaded', () => {
//     // Select the show icon
//     const showIcon = document.querySelector('.show-icon');
    
//     // Select the nav element
//     const nav = document.querySelector('nav');
    
//     // Add click event listener to the show icon
//     showIcon.addEventListener('click', () => {
//         // Toggle the 'hidden-nav' class on the nav element
//         nav.classList.toggle('hidden-nav');
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    // Select the show icon
    const showIcon = document.querySelector('.show-icon');
    
    // Select the nav element
    const nav = document.querySelector('nav');

    // Add click event listener to the show icon
    showIcon.addEventListener('click', () => {
        // Toggle 'hidden-nav' class on the nav element
        nav.classList.toggle('hidden-nav');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Skapa en observer som observerar alla sektioner
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Alternativ och callback för IntersectionObserver
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Aktivera observer när 50% av sektionen är synlig
    };

    // Callback-funktionen för IntersectionObserver
    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ta bort 'active' klassen från alla nav-länkar
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });
                // Lägg till 'active' klassen till den aktuella nav-länken
                let activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
                activeLink.classList.add("active");
            }
        });
    }, options);

    // Observera varje sektion
    sections.forEach(section => {
        observer.observe(section);
    });
});
