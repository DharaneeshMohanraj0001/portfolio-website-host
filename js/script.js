/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
          sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop-150;
            let height = sec.offsetHeight;
            let id=sec.getAttribute('id');


            if(top>=offset && top<offset +height) {
                navLinks.forEach(links =>{
                      links.classList.remove('active');
                      document.querySelector('header nav a[href*='+ id +']').classList.add('active');
                });
            };
          });



let header= document.querySelector('header');

 header.classList.toggle('sticky',window.scrollY>100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};
/*==================== scroll reveal ====================*/
ScrollReveal({
 // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer 💻',
    'Cloud Engineer ☁️',
    'Content Creator 🎥'],
  typeSpeed: 100,
  backSpeed: 150,
  startDelay: 1000,
  smartBackspace: false, // 🔹 Forces full erase
  backDelay: 700,
  loop: true
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  try {
  const response = await fetch("https://finalone-nv93.onrender.com/api/contact", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    alert(result.message);

    if (result.success) {
      contactForm.reset();
    }
  } catch (error) {
    alert("Something went wrong. Try again later.");
    console.error(error);
  }
});

