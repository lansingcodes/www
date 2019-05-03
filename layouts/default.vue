<template>
  <div>
    <a
      class="sr-only focus:block"
      href="#mainContent"
    >Skip to main content</a>
    <header>
      <navigation/>
    </header>
    <main id="mainContent">
      <nuxt/>
    </main>
    <site-footer/>
  </div>
</template>

<script>
import Navigation from '~/components/navigation'
import SiteFooter from '~/components/footer'

export default {
  components: {
    Navigation,
    SiteFooter
  }
}
</script>

<style lang="scss">
body {
  @apply .font-sans;
}

a {
  @apply .text-blue-dark;

  &:hover {
    @apply .text-blue-darker;
  }

  &:focus {
    @apply .text-blue-darker .bg-blue-lighter .outline-none;
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
</style>
