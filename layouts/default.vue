<template>
  <div>
    <a class="sr-only focus:block" href="#mainContent">Skip to main content</a>
    <header>
      <navigation />
    </header>
    <main id="mainContent">
      <nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script>
import Navigation from '~/components/navigation'
import SiteFooter from '~/components/footer'

export default {
  components: {
    Navigation,
    SiteFooter,
  },
}
</script>

<style lang="scss">
body {
  @apply .font-sans;
}

a {
  @apply .text-blue;

  &:hover {
    @apply .text-blue-darker .underline;
  }

  &:focus {
    @apply .text-blue-darker .underline .bg-blue-lighter .outline-none;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply .font-heading .font-bold;
}

p {
  @apply .my-4;
}

button {
  &:hover {
    @apply .bg-blue-darker .text-white .shadow-outline;
  }

  &:focus {
    @apply .bg-blue-darker .text-white .shadow-outline;
  }
}

.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

.lc-bg-ltr-gradient {
  background: linear-gradient(to right, #2979bf, #005198);
}

.lc-bg-right-triangle {
  background-image: url(../assets/images/bg/right-triangle.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.lc-bg-left-triangle {
  background-image: url(../assets/images/bg/left-triangle.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.lc-bg-down-triangle {
  background-image: url(../assets/images/bg/down-triangle.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
