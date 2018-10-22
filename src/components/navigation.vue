<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/images/icon-tall-square-fixed-300-transparent.png"
        alt="Lansing Codes Logo"
      >
      Lansing Codes
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
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a href="http://slack.lansing.codes/" class="nav-link" target="_blank">
            Slack
          </a>
        </li>
        <li class="nav-item">
          <a href="/#calendar" class="nav-link">
            Calendar
          </a>
        </li>
        <li class="nav-item">
          <a href="/#meetups" class="nav-link">
            Meetups
          </a>
        </li>
        <li class="nav-item">
          <a href="/#beginner-resources" class="nav-link">
            Beginners
          </a>
        </li>

        <li class="nav-item">
          <a href="mailto:lansingcodes@gmail.com" title="Email" class="nav-link" aria-label="email">
            <i class="fa fa-1x fa-envelope"></i>
          </a>
        </li>

        <li class="nav-item">
          <a href="https://github.com/lansingcodes/" title="Github" target="_blank" class="nav-link" aria-label="github">
            <i class="fa fa-1x fa-github"></i>
          </a>
        </li>

        <li class="nav-item">
          <a href="https://www.facebook.com/LansingCodes/" title="Facebook" target="_blank" class="nav-link" aria-label="facebook">
            <i class="fa fa-1x fa-facebook"></i>
          </a>
        </li>

        <li class="nav-item">
          <a href="https://twitter.com/lansingcodes" title="Twitter" target="_blank" class="nav-link" aria-label="twitter">
            <i class="fa fa-1x fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        isAtTop: true
      }
    },
    created () {
      this.updateIsAtTop()
      window.addEventListener('scroll', this.updateIsAtTop)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.updateIsAtTop)
    },
    methods: {
      updateIsAtTop () {
        this.isAtTop = document.body.scrollTop < 30
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/scss/custom-bootstrap-theme";

  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    color: $primary-light !important;
    font-family: $header-font-family;
    font-weight: 700;
    text-transform: uppercase;

    .navbar-brand {
      padding-top: 0;
      padding-bottom: 0;

      > img {
        display: inline-block;
        width: 40px;
        margin-top: -5px;
        margin-right: 7px;
        color: $primary-light;
      }
    }
  }

  a {
    color: $primary-light !important;

    &:focus, &:hover {
      color: darken($primary-light, 10%) !important;
    }
  }
</style>
