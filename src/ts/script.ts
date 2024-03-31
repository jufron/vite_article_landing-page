document.addEventListener('DOMContentLoaded', function () : void {

  const hamburgerMenu: HTMLElement | null = document.getElementById('hamburger-menu');
  const buttonToTop: HTMLElement | null = document.querySelector('#to-top');
  const hamburgerItems: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('hamburger-item') as HTMLCollectionOf<HTMLElement>;
  const navbarToggle: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('#navbar-toggle');

  const navbar: HTMLElement | null = document.querySelector('#navbar');
  const navbarAuth: HTMLElement | null = document.querySelector('#navbar-auth');

  hamburgerMenu!.addEventListener('click', function () : void {
    const hamburgerItemsArray: HTMLElement[] = Array.from(hamburgerItems);
    const navbarToggleArray: HTMLElement[] = Array.from(navbarToggle);
    
    hamburgerItemsArray.forEach(item => {
      item.classList.toggle('active');    
    });

    navbarToggleArray.forEach(item => {
      item.classList.toggle('active');
    });
  });  

  window.addEventListener('scroll', function () : void {
    const shouldStick: boolean = window.scrollY > 100;
    const shouldShowButton: boolean = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;

    navbar?.classList.toggle('navbar-sticky', shouldStick);

    navbarAuth?.classList.toggle('button', shouldStick);
    buttonToTop?.classList.toggle('active', shouldShowButton);
  });

  const copyrightText: HTMLElement | null = document.getElementById('copyright-text');
  const currentYear: number = new Date().getFullYear();

  copyrightText!.textContent += ' ' + currentYear;

  buttonToTop?.addEventListener('click', function () : void {
    const scrollStep: number = -50;
  
    // Menjalankan animasi scroll
    function scrollToTop() {
      if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(scrollToTop);
      }
    }
  
    // Memanggil fungsi animasi scroll
    scrollToTop();
  });

});