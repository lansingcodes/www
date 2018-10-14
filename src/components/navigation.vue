<template>
  <nav class="navbar navbar-default navbar-fixed-top" :class="{ affix: !isAtTop }">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-7" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="../assets/images/icon-tall-square-fixed-300-transparent.png" alt="Logo">
          Lansing Codes
        </a>
      </div>
      <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-7">
        <ul class="nav navbar-nav">
          <li>
            <a href="http://slack.lansing.codes/" target="_blank">
              Slack
            </a>
          </li>
          <li>
            <a href="/#calendar">
              Calendar
            </a>
          </li>
          <li>
            <a href="/#meetups">
              Meetups
            </a>
          </li>
          <li>
            <a href="/#beginner-resources">
              Beginners
            </a>
          </li>

          <li>
            <a href="mailto:lansingcodes@gmail.com" title="Email">
              <i class="fa fa-1x fa-envelope"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/lansingcodes/" title="Github" target="_blank">
              <i class="fa fa-1x fa-github"></i>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/LansingCodes/" title="Facebook" target="_blank">
              <i class="fa fa-1x fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/lansingcodes" title="Twitter" target="_blank">
              <i class="fa fa-1x fa-twitter"></i>
            </a>
          </li>

        </ul>
      </div>
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
  nav.affix {
    .navbar-brand {
      color: #3E79BB !important;
    }
  }

  .navbar-brand > img {
    display: inline-block;
    width: 30px;
    margin-top: -5px;
    margin-right: 7px;
    transition: margin 0.3s;
  }

  .nav > li > a {
    &:focus, &:hover {
      color: #3E79BB !important;
    }
  }
</style>
