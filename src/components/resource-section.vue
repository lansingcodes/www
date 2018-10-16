<template>
  <section class="bg-{{ bg }}">
    <div class="container">
      <div class="section-header text-center">
        <a
          v-if="editPath"
          :href="'https://github.com/lansingcodes/www/edit/master/' + editPath"
          target="_blank"
          class="edit-link"
          :aria-label="'edit ' + heading"
        >
          <icon type="fa-pencil-square" class="text-success"></icon>
        </a>
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
  import icon from './icon'

  export default {
    components: {
      icon
    },
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
      },
      editPath: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $default-bg: white;
  $default-text: #444;
  $default-link: #407cbf;

  section.bg-default {
    background: $default-bg;
    color: $default-text;

    hr { border-color: $default-text; }
    a { color: $default-link; }
  }

  $primary-bg: #407cbf;
  $primary-text: white;
  $primary-link: $primary-text;

  section.bg-primary {
    background: $primary-bg;
    color: $primary-text;

    hr { border-color: $primary-text; }
    a { color: $primary-link; }
    i { color: $primary-text; }
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
    i { color: $primary-text; }
  }

  section > .container {
    position: relative;

    .edit-link {
      position: absolute;
      right: 0;
      opacity: 0;
      transition: all 0.2s;
      font-size: 50px;
    }

    &:hover .edit-link {
      opacity: 0.1;

      &:hover {
        opacity: 1;
      }
    }

    hr {
      margin-bottom: 40px;
    }
  }
</style>
