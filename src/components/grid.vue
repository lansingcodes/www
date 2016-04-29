<template>
  <div class="grid-wrapper" :data-columns="columns">
    <slot
      name="item"
      class="grid-item"
      :style="itemStyles"
    >
      GRID CONTENT
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Number,
        required: true
      },
      component: {
        type: String
      }
    },
    computed: {
      itemStyles () {
        return {
          width: `${100 / this.columns}%`
        }
      }
    }
  }
</script>

<style lang="scss">
  $grid-padding: 30px;

  .grid-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -$grid-padding / 2;

    > * {
      margin: $grid-padding / 2;
    }
  }

  @for $columns from 1 through 12 {
    .grid-wrapper[data-columns="#{$columns}"] > * {
      width: calc(#{100% / $columns} - #{$grid-padding});
    }
  }

  @for $columns from 2 through 12 {
    @media (max-width: #{300 * $columns}px) {
      .grid-wrapper[data-columns="#{$columns}"] > * {
        width: calc(#{100% / ($columns - 1)} - #{$grid-padding});
      }
    }
  }

  @for $columns from 3 through 12 {
    @media (max-width: #{200 * $columns}px) {
      .grid-wrapper[data-columns="#{$columns}"] > * {
        width: calc(#{100% / ($columns - 2)} - #{$grid-padding});
      }
    }
  }

  @for $columns from 4 through 12 {
    @media (max-width: #{150 * $columns}px) {
      .grid-wrapper[data-columns="#{$columns}"] > * {
        width: calc(#{100% / ($columns - 3)} - #{$grid-padding});
      }
    }
  }
</style>
