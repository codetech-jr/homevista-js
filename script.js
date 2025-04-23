const header = document.querySelector(".header")
const menuBar = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
const counterElements = document.querySelectorAll(".counter-box .count")
const sections = document.querySelectorAll(".section");
const navlinks = document.querySelectorAll(".navlink");
const backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // active class on scroll
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navlinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

// close navbar when nav link is clicked
    navlinks.forEach((link) => {
        link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
        }
        });
    });

    backToTop.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })


    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
});



window.addEventListener("DOMContentLoaded", () => {
    if (menuBar) {
        menuBar.addEventListener("click", toggleMenu);
    }

    if(close){
        close.addEventListener('click', closeMenu)
    }
});

// counter
const speed = 200;

function startcounter(){
    counterElements.forEach((counter) => {

        const updateCount = ()=>{
        
            const target = +counter.getAttribute('data-count');

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            }else{
                counter.innerText = target;
            }
        }

        updateCount();
        observer.unobserve(counter);
    })
}


// counter
const observer = new IntersectionObserver(
    (entries, observer) =>{
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startcounter();
                observer.disconnect();
            }
        })
    }
)

counterElements.forEach((counter) => observer.observe(counter))






// close menu
function closeMenu(){
    navbar.classList.remove("active")
}

//toggle menu
function toggleMenu() {
    navbar.classList.toggle("active");
}


document.querySelector("button").addEventListener("click", function () {
    alert("Gracias por tu interés, te contactaremos pronto.");
  });
  