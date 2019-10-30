<template>
  <div>
    <div class="container-fluid banner-parent d-flex">
      <div class="col-md-6">
        <div class="banner-content">
          <h2 class="mobile">
            We help build your tech solutions
          </h2>
          <h2 class="desktop">
            Make Your Brand Stand Out With Our Exceptional
            <vue-typer
              class="typed"
              :text="typerList"
              initial-action="erasing"
              :repeat="Infinity"
              :shuffle="true"
              :erase-delay="0"
              erase-style="backspace"
              caret-animation="blink"
            />
          </h2>
          <a
            class="btn btn-primary"
            href="https://api.whatsapp.com/send?phone=+2347068684876"
            >Chat with us</a
          >
        </div>
      </div>
      <div class="col-md-6 banner-img">
        <img src="~/assets/images/banner-img.svg" width="400px" />
      </div>
    </div>
    <div id="services" class="section-title-one">
      <h3>What We Do</h3>
    </div>
    <div class="features-section">
      <div class="container services">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/web_development.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>Web Development</h4>
            </div>
            <!-- features-block -->
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/ios.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>iOS Development</h4>
            </div>
            <!-- features-block -->
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/android.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>Android Development</h4>
            </div>
            <!-- features-block -->
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/dApp.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>DApp Development</h4>
            </div>
            <!-- features-block -->
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/blockchain.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>Blockchain Consultation</h4>
            </div>
            <!-- features-block -->
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="features-block">
              <img
                src="~/assets/images/services/infrastructure.svg"
                alt="img"
                class="img-responsive service-img"
              />
              <h4>Cloud Computing Consultation</h4>
            </div>
            <!-- features-block -->
          </div>
        </div>
      </div>
    </div>
    <!-- features-section -->

    <div class="offset-lg-4 col-lg-5 offset-md-2 col-md-8" id="contact">
      <div class="qs-answer-section">
        <img
          src="~/assets/images/others/contact.svg"
          alt="img"
          class="img-responsive"
          style="width: 300px"
        />
        <h4>Want to speak to us?</h4>
        <span>We have a record of replying to you within an 1 hour.</span>
        <div class="btn-group">
          <a
            class="btn btn-default active"
            href="mailto:hello@quru.com?Subject=Hello%20Quru%20Tech"
            >E-mail Us</a
          >
          <a
            href="https://api.whatsapp.com/send?phone=+2347068684876"
            class="btn btn-default"
            >Let’s Chat</a
          >
        </div>
        <p>
          Or maybe you’d like to call us:
          <span
            ><a href="tel:+2347068684876" class="call-us"
              >+234 706 8684 876</a
            ></span
          >
        </p>
      </div>
      <!-- qs-answer-section -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typerList: [
        'iOS Development',
        'Android Development',
        'Smart Contract Development',
        'Web App Development',
        'Web Design',
        'Blockchain Consulting'
      ]
    }
  }
}
</script>
<style lang="scss">
$primary-color: #f5bc31;
.vue-typer .custom.char.typed {
  color: $primary-color;
}

.vue-typer .custom.char.selected {
  background-color: $primary-color;
  color: #fff;
}
.vue-typer .custom.caret {
  width: 10px;
  background-color: $primary-color;
}
</style>
