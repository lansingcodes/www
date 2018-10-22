<template>
  <header
    class="d-flex justify-content-center align-content-center align-items-center"
  >
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
            size="lg"
          >
            See what's happening
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
    background-position: 50% 32px;
    background-size: cover;

    .header-content {
      align-items: center;
      background-color: hsla(0,0%,100%,.75);
      color: #407cbf;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 100%;

      .header-content-inner {
        box-shadow: none;
        background: transparent;
      }
    }

    p {
      font-weight: 300;
      color: #444;
      margin: 0 auto 50px;
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
