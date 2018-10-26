<template>
  <div class="lc-background-image">
    <div class="flex flex-wrap justify-center pt-8">
      <section class="flex-none w-full sm:w-1/2 max-w-sm overflow-hidden shadow-lg bg-white text-center p-8 sm:mb-24">
        <h2 class="uppercase text-blue text-3xl mb-4">Lansing Codes</h2>
        <p>Events and resources for Lansing coders</p>
        <hr class="border-4 border-blue my-6 w-1/6 ">
        <p class="mb-4">for those who code or aspire to, professionally or as a hobby</p>
        <img
          class="h-32 w-32"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
        >
      </section>

      <section class="w-full sm:w-1/2 max-w-sm overflow-hidden shadow-lg bg-blue-dark text-white p-8 sm:mt-24 sm:-ml-4">
        <h2 class="uppercase text-center text-3xl mb-4">Next Event</h2>
        <hr class="border-4 border-white my-6 w-1/6 ">
        <div class="text-left font-normal">
          <h3 class="font-normal mb-2">Designing websites with Nuxt and Tailwind</h3>
          <p class="text-xs mb-4">October 26, 2018, 7:00 PM</p>
          <p class="mb-4">Sponsor: Lansing.Codes</p>
          <p class="mb-6">
            Annoy the old grumpy cat, start a fight and then retreat to wash when i lose
            if human is on laptop sit on the keyboard for sit in a box for hours for eat the
            rubberband. Curl into a furry donut ignore the human until she needs to get up,
            then climb on her lap and sprawl.
          </p>
        </div>
        <div>
          <button class="bg-white hover:bg-grey-lightest text-blue font-bold uppercase text-center py-4 px-8 min-w-24 rounded-full">
            Show More
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.lc-background-image {
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url('../assets/images/capitol.jpg');
}
</style>
