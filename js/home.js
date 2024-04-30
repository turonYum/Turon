var nav = document.querySelector('nav');
var logo = document.querySelector('.turon-brand');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 50) {
        nav.classList.add('bg-dark', 'shadow');
        nav.querySelectorAll('.navbar-light .navbar-nav .nav-link').forEach(function(link) {
          link.style.color = 'white';
        });
        logo.src = 'images/Salango_Logooo.png';
      } else {
        nav.querySelectorAll('.navbar-light .navbar-nav .nav-link').forEach(function(link) {
          link.style.color = 'black';
        });
        nav.classList.remove('bg-dark');
        logo.src = 'images/Turon_Logo.png';
      }
    });

