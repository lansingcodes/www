<template>
  <section class="bg-{{ bg }}">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading">{{ heading }}</h2>
        <p v-if="description">{{ description }}</p>
        <hr>
      </div>
      <slot>
        SECTION CONTENT
      </slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      bg: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default', 'primary', 'dark'
          ].some(bgType => bgType === value)
        }
      },
      heading: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  $default-bg: white;
  $default-text: #444;
  $default-link: #407CBF;

  section.bg-default {
    background: $default-bg;
    color: $default-text;

    hr { border-color: $default-text; }
    a { color: $default-link; }
  }

  $primary-bg: #407CBF;
  $primary-text: white;
  $primary-link: $primary-text;

  section.bg-primary {
    background: $primary-bg;
    color: $primary-text;

    hr { border-color: $primary-text; }
    a { color: $primary-link; }
  }

  $dark-bg: #222;
  $dark-text: white;
  $dark-link: $dark-text;

  section.bg-dark {
    background: $dark-bg;
    color: $dark-text;

    hr { border-color: $dark-text; }
    a {
      color: $dark-link;

      &.btn { color: $dark-bg; }
    }
  }
</style>
