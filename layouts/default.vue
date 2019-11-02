<template>
  <div>
    <div class="banner-block">
      <nav class="navbar main-nav navbar-expand-lg">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">
            Quru Tech
          </nuxt-link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li v-if="false" class="nav-item dropdown">
                <a class="nav-link" href="exchange-one.html">Platform </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Why Choose Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">How We Work</a>
                  </li>
                </ul>
              </li>
              <li v-if="false" class="nav-item">
                <a class="nav-link" href="#">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>

              <li class="nav-item button active">
                <a class="btn nav-link" href="#contact">Get in touch</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Modal -->
      </nav>
      <!-- main-nav-block -->
    </div>
    <!-- banner-block -->
    <nuxt />
    <footer class="footer">
      <div class="footer-upper-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div class="footer-logo">
                <nuxt-link to="/" class="logo">
                  Quru Tech
                </nuxt-link>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <div class="footer-info-list">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Our Company</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Join Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <div class="footer-info-list">
                <h4>Learn</h4>
                <ul>
                  <li><a href="#">How to build DApps</a></li>
                  <li><a href="#">Blockchain resources</a></li>
                  <li><a href="#">Smart Contracts</a></li>
                  <li><a href="#">Create your own token/coin</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4">
              <div class="footer-info-list">
                <h4>Products</h4>
                <ul>
                  <li><a href="#">Full DApps</a></li>
                  <li><a href="#">Open source projects</a></li>
                  <li><a href="#">Mobiles Apps</a></li>
                  <li><a href="#">Web Apps</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="footer-info-list">
                <h4>Contact Us</h4>
                <ul class="contact-info">
                  <li>Email: <span>hello@qurutech.com</span></li>
                  <li>
                    Phone:
                    <span
                      ><a href="tel:+2347068684876">+234 706 8684 876</a></span
                    >
                  </li>
                </ul>
                <ul class="social-style-two">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/qurutech">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-wrap">
            <div class="trade-volume-block">
              <ul>
                <li>
                  <div class="copyright-text">
                    Built with ❤ by <a>Quru Team</a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="copyright-text">
              © 2019 <a>Quru Tech</a>. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
