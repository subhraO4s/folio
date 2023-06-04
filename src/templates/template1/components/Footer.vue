<template>
    <footer class="footer mt-16">
      <div class="footer__container grid">
        <div class="footer__content">
          <a href="#" class="footer__logo"> The Advertising Agency</a>
          <span class="footer__description">Marketing Agency</span>
          <div>
            <a href="#" class="footer__social">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="footer__social">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="footer__social">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
  
        <div class="footer__content">
          <h3 class="footer__title">Services</h3>
          <ul>
            <li>
              <a href="#" class="footer__link"> SEO </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Marketing </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Advertisement </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Contact us </a>
            </li>
          </ul>
        </div>
  
        <div class="footer__content">
          <h3 class="footer__title">Company</h3>
          <ul>
            <li>
              <a href="#" class="footer__link"> Event </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Contact us </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Privacy policy </a>
            </li>
            <li>
              <a href="#" class="footer__link"> Terms of services </a>
            </li>
          </ul>
        </div>
  
        <div class="footer__content">
          <h3 class="footer__title">Contact Us</h3>
          <ul>
            <li class="footer__link">Somwhere in India</li>
            <li class="footer__link">Somewhere pincode</li>
            <li class="footer__link">999 - 888 - 777</li>
            <li class="footer__link">theadvertisementagency.com@gmail.com</li>
          </ul>
        </div>
      </div>
  
      <p class="text-align-center color-secondary mt-10 mb-4">
        &#169; 2023 TheAdvertisingAgency. All right reserved
      </p>
    </footer>
  </template>
  
  <style scoped>
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  .footer__container {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
  }
  
  .footer__logo {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: 700;
  }
  .footer__social {
    font-size: 1.5rem;
    color: black;
    margin-right: 1rem;
  }
  .footer__link {
    display: inline-block;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .footer__link:hover {
    color: var(--primary-color);
  }
  
  .footer__description {
    display: block;
    margin: 1rem 0 1rem;
  }
  </style>
  