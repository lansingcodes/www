<template>
  <div>
    <a
      class="sr-only"
      href="#mainContent">Skip to main content</a>
    <navigation/>
    <main
      id="mainContent"
      role="main"
      tabindex="-1"
    >
      <nuxt/>
    </main>
  </div>
</template>

<script>
import navigation from '~/components/navigation'
export default {
  components: {
    navigation
  }
}
</script>

<style>
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
