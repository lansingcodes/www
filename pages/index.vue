<template>
  <section class="container">
    <h1>Hello world</h1>
    <font-awesome-icon :icon="['fas', 'code']" />
    <font-awesome-icon :icon="['fas', 'hourglass-half']" />
    <font-awesome-icon :icon="['fab', 'twitter']" />
  </section>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
