<template>
  <div>
    <a
      class="sr-only"
      href="#mainContent">Skip to main content</a>
    <header>
      <navigation/>
    </header>
    <main
      id="mainContent"
      role="main"
      tabindex="-1"
    >
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

<style>
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
