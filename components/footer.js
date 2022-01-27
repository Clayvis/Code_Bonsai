// Configuring a custom element

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  // connectCallback , fires everytime the footer is mentioned
  connectedCallback() {
    this.outerHTML = ` <footer class="text-center text-white" style="background-color: #f1f1f1">
    <!-- Grid container -->
    <div class="container pt-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Google -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-google"></i
        ></a>
        <!-- Linkedin -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i
        ></a>
        <!-- Github -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
      class="text-center text-dark p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>`;
  }
}

// This method takes in two arguments, the name of what the custom element would like to be called and then the Class it belongs too
customElements.define("footer-component", Footer);
