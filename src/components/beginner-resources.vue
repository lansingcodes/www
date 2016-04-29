<template>
  <resource-section
    id="beginner-resources"
    bg="primary"
    heading="Beginner Resources"
    description="where to start if you're new to coding"
  >
    <grid :columns="2">
      <div slot="item" v-for="resource in beginnerResources">
        <h2>
          <a :href="resource.url">{{ resource.title }}</a>
        </h2>
        {{{ resource.desc }}}
      </div>
    </grid>
  </resource-section>
</template>

<script>
  import beginnerResources from 'src/config/beginner-resources'
  import resourceSection from './resource-section'
  import grid from './grid'

  export default {
    components: {
      resourceSection, grid
    },
    data () {
      return {
        beginnerResources
      }
    }
  }
</script>
