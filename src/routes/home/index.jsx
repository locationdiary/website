import { h } from "preact";

const Home = () => (
  <div>
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container box_1620">
            <a class="navbar-brand" href="/">
              <h3>📍Location Diary</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>

            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav justify-content-end">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#screenshot">
                    Screenshot
                  </a>
                </li>
              </ul>

              <div class="nav-right text-center text-lg-right py-4 py-lg-0">
                <a class="button" href="https://app.locationdiary.com">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <section class="hero-banner magic-ball">
      <div class="container">
        <div class="row align-items-center text-center text-md-left">
          <div class="col-md-6 col-lg-5 mb-5 mb-md-0">
            <h1>Location Diary</h1>
            <p>
              Keep a track of where you have been, all that saved securely so
              that only you can access your data.
            </p>
            <a
              class="button button-hero mt-4"
              href="https://app.locationdiary.com"
            >
              Get Started
            </a>
          </div>
          <div class="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
            <img class="img-fluid" src="/assets/img/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-margin generic-margin">
      <div class="container">
        <div class="section-intro text-center pb-90px">
          <h2 id="features">Features</h2>
          <p>Here is what our app can do</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="service-card text-center">
              <div class="service-card-img">
                <img
                  class="img-fluid"
                  src="/assets/img/adventure.svg"
                  width="130"
                  alt=""
                />
              </div>
              <div class="service-card-body">
                <h3>Save locations</h3>
                <p>
                  You are in holidays and you want to save all locations you've
                  been to?
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="service-card text-center">
              <div class="service-card-img">
                <img
                  class="img-fluid"
                  src="/assets/img/security.svg"
                  width="130"
                  alt=""
                />
              </div>
              <div class="service-card-body">
                <h3>Secure</h3>
                <p>
                  Location diary is end-to-end encrypted, so your locations are
                  securely stored.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="service-card text-center">
              <div class="service-card-img">
                <img
                  class="img-fluid"
                  src="/assets/img/authentication.svg"
                  width="130"
                  alt=""
                />
              </div>
              <div class="service-card-body">
                <h3>Privacy friendly</h3>
                <p>
                  As your data are encrypted with Blockstack, only you can see
                  your data!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="screenshot"
      class="bg-gray section-padding magic-ball magic-ball-about"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-6 mb-4 mb-md-0">
            <div class="about-img">
              <img
                class="img-fluid"
                src="/assets/img/screenshots/capture.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-5 col-md-6 align-self-center about-content">
            <h2>
              Exploration is <br class="d-none d-xl-block" /> really the essence{" "}
              <br class="d-none d-xl-block" /> of the human spirit
            </h2>
            <p>
              We spend so many time exploring the world, and never remember
              where we have been in the past. Thanks to Location Diary, you can
              keep track of all places you have been to, and display them on a
              beautiful map.
            </p>
            <a class="button" href="https://app.locationdiary.com">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer" class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4  col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>About Location Diary</h6>
              <p>
                We wanted to create an app which respects our users privacy,
                that's why we created location diary.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Navigation Links</h6>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#features">Features</a>
                    </li>
                    <li>
                      <a href="#screenshot">Screenshot</a>
                    </li>
                    <li>
                      <a href="#footer">Footer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Social</h6>
              <div class="row">
                <div class="col">
                  <ul>
                    <li>
                      <a href="https://facebook.com/locationdiary">Facebook</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/locationdiary">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="row align-items-center">
            <p class="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
              Copyright &copy;
              {new Date().getFullYear()} All rights reserved
            </p>
            <div class="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
              <a href="https://facebook.com/locationdiary">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com/locationdiary">
                <i class="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <script src="vendors/jquery/jquery-3.2.1.min.js" />
    <script src="vendors/bootstrap/bootstrap.bundle.min.js" />
  </div>
);

export default Home;
