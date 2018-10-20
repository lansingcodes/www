<template>
  <div :style="headerStyles" class="header">
    <div class="header-content">
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
          >
            See what's happening now
          </button-link>
        </slot>
      </div>
    </div>
  </div>
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
  .header {
    position: relative;
    height: 100vh;
    min-height: 100vh;
    text-align: center;
    color: #fff;
    background-image: url('/static/images/capitol.jpg');
    background-position: top;
    background-size: cover;
  }

  .header-content {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .header-content-inner {
    color: #407cbf;
    box-shadow: none;
    background: transparent;
    p {
      color: #000!important;
    }
  }

  @media (max-width: 767px) {
    header {
      min-height: auto;
    }

    .header-content {
      padding: 100px 15px;
      position: relative;
      top: auto;
      transform: none;
    }
  }
</style>
