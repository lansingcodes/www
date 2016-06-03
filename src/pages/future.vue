<template>
  <layout>
    <welcome :background-image="futureHeaderImage">
      <span slot="heading" class="future-heading">
        Project Renaissance
      </span>
      <span slot="tagline" class="future-tagline">
        growing Lansing into a tech hub
      </span>
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
      class="section-small"
    >
      <p>Technology has already had a tremendous impact on the job market in the Greater Lansing Area. Due to its impact, many who relied on employment in the manufacturing industry have found themselves obsolete. As a result, previously vibrant downtown areas and neighborhoods have decayed. Many of these have only found new life relatively recently and others still have yet to recover.</p>
      <p>That was a drop in the water compared to what's to come.</p>
      <p>Currently, 80% of the jobs in the United States are in the service industry. In these positions, people's primary responsibilities involve reading, writing, listening, speaking, and following instructions. These are all skills where computers will soon have exceeded any human ability - where they haven't already. That means increasingly in the coming decades, 80% of working people in the United States will become unemployable in their current line of work.</p>
      <p>So what's the solution? Where are jobs actually <em>growing</em>? The short answer: where there's code. By some estimates, there are currently 400,000 programming positions in the United States that are unable to be fulfilled. By 2020, some estimates have that number at 2 million.</p>
      <p>The question only question is, will Lansing be leading the way in this new, inevitable future? Or will it take its biggest hit yet?</p>
    </resource-section>
    <resource-section
      id="where-we-are"
      heading="Where we are"
      description="our current resources and how we could utilize them"
    >
      <div class="row">
        <div class="col-md-6">
          <h3>Hypotheses</h3>
          <h4>Communication</h4>
          <ul>
            <li>Communication between local stakeholders is currently low</li>
            <li>Better communication would pool resources to improve the effectiveness of individual initiatives</li>
          </ul>
          <h4>Access</h4>
          <ul>
            <li>Many Lansing residents currently lack access to convenient and effective tech education</li>
          </ul>
          <h4>Efficacy</h4>
          <ul>
            <li>Current initiatives could be more effective in attractive people from non-technical fields</li>
            <li>Current initiatives could be more effective in fostering excitement around programming in participants</li>
          </ul>
          <h4>Perception / Visibility</h4>
          <ul>
            <li>Many talented programmers leave the area because the tech scene is not seen as exciting and thriving</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3>Partners</h3>
          <h4>Community Organizers/Resources</h4>
          <ul>
            <li>Capital Area IT Council</li>
            <li>Lansing Codes</li>
            <li>Lansing Makers Space</li>
            <li>MITN</li>
            <li>The Hub?</li>
          </ul>
          <h4>Educators/Institutions</h4>
          <ul>
            <li>Coders Farm</li>
            <li>Lansing Code Lab</li>
            <li>LCC</li>
            <li>MSU</li>
          </ul>
          <h4>Workplaces</h4>
          <ul>
            <li>Gravity Works</li>
            <li>Vertafore</li>
            <li>Web Ascender</li>
          </ul>
          <h4>Business Incubation/Accelerators</h4>
          <ul>
            <li>The Fledge?</li>
            <li>The Hatch</li>
            <li>The Hive?</li>
          </ul>
        </div>
      </div>
    </resource-section>
    <resource-section
      bg="primary"
      id="plan-of-action"
      heading="Plan of action"
      description="how we'll get there"
      class="section-small"
    >
      <h3>Stage 1: Goal Definition &amp; Stakeholder Definition</h3>
      <h4>Goals</h4>
      <ul>
        <li>increase number of non-programmers with programming skills</li>
        <li>increase the number of working programmers in the area</li>
        <li>increase communication and collaboration between stakeholders</li>
      </ul>
      <h3>Stage 2: Needs Assessment</h3>
      <h4>Questions</h4>
      <ul>
        <li>Why aren't there more programmers?</li>
        <li>Why do programmers leave the area?</li>
      </ul>
      <h3>Stage 3: Planning &amp; Prioritization</h3>
      <h3>Stage 4: Execution</h3>
    </resource-section>
  </layout>
</template>

<script>
  import layout from '../layouts/main'
  import resourceSection from '../components/resource-section'
  import welcome from '../components/welcome'
  import buttonLink from '../components/button-link'

  export default {
    replace: false,
    components: {
      layout, resourceSection, welcome, buttonLink
    },
    data () {
      return {
        futureHeaderImage: require('../assets/images/downtown-lansing-banner.jpg')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .future-heading {
    font-family: 'Amatic SC';
    font-size: 3em;
  }
</style>
