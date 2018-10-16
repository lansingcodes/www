<template>
  <resource-section
    id="membership-organizations"
    bg="primary"
    heading="Membership Organizations"
    description="professional organizations providing resources and advocacy"
    edit-path="src/config/membership-organizations.js"
  >
    <grid :columns="2">
      <div slot="item" v-for="organization in membershipOrganizations">
        <h2>
          <a :href="organization.url" class="text-white">{{ organization.title }}</a>
        </h2>
        {{{ organization.desc }}}
      </div>
    </grid>
  </resource-section>
</template>

<script>
  import membershipOrganizations from 'src/config/membership-organizations'
  import resourceSection from './resource-section'
  import grid from './grid'

  export default {
    components: {
      resourceSection, grid
    },
    data () {
      return {
        membershipOrganizations
      }
    }
  }
</script>

<style lang="scss" scoped>
  .membership-organizations-container {
    display: flex;

    > .membership-organization {
      width: 50%;
    }
  }
</style>
