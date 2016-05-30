<template>
  <layout>
    <welcome>
      <button-link
        slot="call-to-action"
        type="primary"
        icon="fa-road"
        href="#why-tech-matters"
      >
        Why tech matters
      </button-link>
    </welcome>
    <resource-section
      id="why-tech-matters"
      bg="primary"
      heading="Why tech matters"
      description="the future of work"
    >
      <p>Technology has already had a tremendous impact on the job market in the Greater Lansing Area. As technology has become cheaper and more reliable, many who relied on employment in the manufacturing industry have found themselves obsolete. As unemployment grew, previously vibrant downtown areas and neighborhoods decayed. Many of these have only found new life relatively recently and others still have yet to recover.</p>
      <p>That was a drop in the water compared to what's to come.</p>
      <p>Currently, 80% of the jobs in the United States are in the service industry. In these positions, people's primary responsibilities involve reading, writing, listening, speaking, and following instructions. These are all skills where computers will soon have exceeded any human ability - if they haven't already. That means right now, and increasingly in the coming decades, 80% of working people in the United States will become unemployable in their current line of work.</p>
      <p>So what's the solution? Where are jobs growing? The short answer: where there's code. By some estimates, there are currently 400,000 programming positions in the United States that are unable to be fulfilled. By 2020, some estimates have that number at 2 million.</p>
      <p>The question is, will Lansing be leading the way in this new, inevitable future? Or will it take its biggest hit yet?</p>
    </resource-section>
    <!-- <resource-section
      id="where-we-are-now"
      heading="Where we are now"
      description="the current state of tech in Lansing"
    >
      <p>Entrepreneurial efforts in the </p>
      <p>The number of talented programmers that the area produces is relatively low. </p>
      <p>The vast majority of talented graduates with technical degrees seem to leave the area for perceived tech hubs. That's not because there aren't jobs in the area. On the contrary, I'm frequently asked if I know anyone that could fill a certain position. I usually don't - not locally, at least.</p>
    </resource-section> -->
    <resource-section
      id="plans-for-the-future"
      heading="Plans for the future"
      description="where we could take Lansing"
    >
      - Goals
        - increase number of programmers in Lansing area
        - increase coordination between community organizers
        - increase communication with local companies
      - Needs assessment
      - _Why_ aren't there more programmers?
      - Figure out why
    </resource-section>
  </layout>
</template>

<script>
  import layout from '../layouts/main'
  import resourceSection from '../components/resource-section'
  import welcome from '../components/welcome'
  import buttonLink from '../components/button-link'

  export default {
    components: {
      layout, resourceSection, welcome, buttonLink
    }
  }
</script>
