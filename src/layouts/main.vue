<template>
  <div class="skipNav">
    <a href="#mainContent" class="skip-main">Skip Navigation</a>
  </div>
  <navigation></navigation>
  <div role="main" class="main" id="mainContent" tabindex="-1">
    <slot></slot>
  </div>
</template>

<script>
  import navigation from 'src/components/navigation'

  export default {
    components: {
      navigation
    }
  }
</script>

<style lang="scss">
  body, h1, h2, h3, h4, h5, h6, .btn {
    font-family: 'Lora', Lato, Arial, sans-serif;
  }

  .popover {
    color: #555;
  }

  section.section-small > .container {
    max-width: 600px;
  }

  .header-content-inner {
    box-shadow: 0 0 200px 100px rgba(0,0,0,0.4);
    background-color: rgba(0,0,0,0.4);
  }

  .header .header-content .header-content-inner p {
      margin-bottom: 50px;
      font-size: 16px;
      font-weight: 300;
      color: rgba(255,255,255,.7);
  }

  .main {
    height: 100%;
    width:100%;
  }

  a.skip-main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
  }

  a.skip-main:focus, a.skip-main:active {
    left: 10px;
    top: 10px;
    height: auto;
    width: auto;
    padding: 10px;
    text-align:center;
    font-size:1.2em;
    z-index:1100;
    background: #FFF;
  }
</style>
