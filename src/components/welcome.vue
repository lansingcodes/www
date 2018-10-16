<template>
  <header :style="headerStyles" class="d-flex justify-content-center align-content-center align-items-center">
    <div class="">
      <div class="header-content-inner">
        <h1 class="heading">
          <slot name="heading">
            Events and resources for Lansing coders
          </slot>
        </h1>
        <hr class="divider">
        <p>
          <slot name="tagline">
            for those who code or aspire to, professionally or as a hobby
          </slot>
        </p>
        <slot name="call-to-action">
          <button-link
            type="primary"
            icon="fa-calendar"
            href="#calendar"
            size="lg"
          >
            See what's happening now
          </button-link>
        </slot>
      </div>
    </div>
  </header>
</template>

<script>
  import buttonLink from './button-link'

  export default {
    components: {
      buttonLink
    },
    props: {
      backgroundImage: {
        type: String,
        default: null
      }
    },
    computed: {
      headerStyles () {
        const styles = {}
        if (this.backgroundImage) {
          styles.backgroundImage = `url(${this.backgroundImage})`
        }
        return styles
      }
    }
  }
</script>

<style lang="scss" scoped>
  hr {
    margin-bottom: 20px;
  }

  header {
    position: relative;
    height: 100vh;
    min-height: 100vh;
    text-align: center;
    color: #fff;
    background-image: url('/static/images/capitol.jpg');
    background-position: top;
    background-size: cover;
    min-height: 100%;
    height: 100vh;

    p {
      margin-bottom: 50px;
      font-weight: 300;
      color: rgba(255,255,255,.7);
      margin-right: auto;
      margin-left: auto;
      max-width: 80%;
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    header {
      min-height: auto;
    }
  }
</style>
