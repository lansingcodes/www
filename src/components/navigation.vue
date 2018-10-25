<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/images/icon-tall-square-fixed-300-transparent.png"
        alt="Lansing Codes Logo"
      >
      Lansing Codes
    </a>
    <button
      class="navbar-toggler"
      :class="{ collapsed: collapsed }"
      @click.stop.prevent="collapsed = !collapsed"
      type="button"
      aria-controls="navbarSupportedContent"
      :aria-expanded="(!collapsed).toString()"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      :class="{ show: !collapsed }"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0 text-right">
        <li class="nav-item">
          <a
            href="https://slack.lansing.codes/"
            class="nav-link"
            target="_blank"
          >
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
          <a
            href="mailto:lansingcodes@gmail.com"
            title="Email"
            class="nav-link nav-icon"
            aria-label="email"
          >
            <i class="fa fa-envelope"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/lansingcodes/"
            title="Github"
            target="_blank"
            class="nav-link nav-icon"
            aria-label="github"
          >
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://www.facebook.com/LansingCodes/"
            title="Facebook"
            target="_blank"
            class="nav-link nav-icon"
            aria-label="facebook"
          >
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://twitter.com/lansingcodes"
            title="Twitter"
            target="_blank"
            class="nav-link nav-icon"
            aria-label="twitter"
          >
            <i class="fa fa-twitter"></i>
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
        collapsed: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/scss/custom-bootstrap-theme";
  @import "node_modules/bootstrap/scss/bootstrap";

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

    .nav-item {
      font-size: $font-size-base;
    }

    .nav-icon {
      display: inline-block;
      padding-left: 8px;

      .fa {
        font-size: $font-size-base * 1.5;
      }
    }

    @media (min-width: 992px) {
      .nav-item {
        font-size: $font-size-sm;
      }

      .nav-icon .fa {
        font-size: $font-size-base * 1.2;
      }
    }

    .navbar-toggler-icon {
      width: 1rem;
    }

    @media (min-width: 576px) {
      .navbar-toggler-icon {
        width: 1.5rem;
      }
    }

    .collapse {
      display: block;
      max-height: 0;
      overflow: hidden;
      transition: max-height .5s cubic-bezier(0, 1, 0, 1);

      &.show {
        max-height: 99em;
        transition: max-height .5s ease-in-out;
      }
    }

    .collapse:not(.show) {
      display: inherit;
    }

    @media (min-width: 992px) {
      .collapse:not(.show) {
        max-height: 99em;
      }
    }
  }

  a {
    color: $primary !important;

    &:focus, &:hover {
      color: darken($primary, 10%) !important;
    }
  }
</style>
