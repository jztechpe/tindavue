<template>
  <div class="dropdown" :class="classes" v-click-outside="vcoConfig">
    <div v-if="!isHoverable" class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div v-else class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
  name: 'JzDropdown',
  directives: {
    clickOutsite: vClickOutside.directive
  },
  props: {
    value: {
      required: false,
      default: false
    },
    isRight: {
      required: false,
      default: false
    },
    isHoverable: {
      required: false,
      default: false
    }
  },
  data () {
    return {
      vcoConfig: {
        handler: this.onClickOutside,
        middleware: this.middleware,
        events: ['dblclick', 'click'],
        // Note: The default value is true, but in case you want to activate / deactivate
        //       this directive dynamically use this attribute.
        isActive: true,
        // Note: The default value is true. See "Detecting Iframe Clicks" section
        //       to understand why this behaviour is behind a flag.
        detectIFrame: true
      }
    }
  },
  methods: {
    open() {
      this.$emit('input', true);
    },
    close() {
      this.$emit('input', false);
    },
    onClickOutside () {
      this.close();
    }
  },
  computed: {
    classes() {
      return {
        'is-active': this.value,
        'is-hoverable': this.isHoverable,
        'is-right': this.isRight,
      }
    } 
  }
}
</script>

<style lang="scss">
.dropdown-trigger {
  cursor: pointer;
}
</style>