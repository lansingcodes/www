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
  @import 'node_modules/bootstrap/scss/mixins';
  @import 'node_modules/bootstrap/scss/functions';
  @import 'node_modules/bootstrap/scss/variables';

  $default-bg: $white;
  $default-text: #444;
  $default-link: $primary;

  section {
    padding-top: 100px;
    padding-bottom: 100px;

    &.bg-default {
      background: $white;
      color: $default-text;

      hr { border-color: $default-text; }
      a { color: $default-text; }
    }

    &.bg-primary {
      background: $primary;
      color: $white;

      hr { border-color: $white; }
      a { color: $white!important; }
      i { color: $white; }
    }

    &.bg-dark {
      background: $gray-900;
      color: $white;

      hr { border-color: $white; }
      a {
        color: $white;

        &.btn { color: $gray-900; }
      }
      i { color: $white; }
    }

    > .container {
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
    }
  }
</style>
