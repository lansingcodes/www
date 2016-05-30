<template>
  <header>
    <div class="header-content">
      <div class="header-content-inner">
        <h1 class="heading">
          Events and resources for Lansing coders
        </h1>
        <hr class="divider">
        <p>
          <em>for those who code or aspire to, professionally or as a hobby</em>
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
  header {
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    background-image: url(../assets/images/header.jpg);
    background-position: center;
    background-size: cover;
    min-height: 100%;
  }

  .header-content {
    width: 100%;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0 0 200px 100px rgba(0,0,0,0.5);
    padding: 0 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
