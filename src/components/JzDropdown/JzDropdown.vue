<template>
  <div class="dropdown" :class="classes" v-click-outside="onClickOutside">
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
  methods: {
    open() {
      this.$emit('input', true);
    },
    close() {
      this.$emit('input', false);
    },
    onClickOutside () {
      if (this.value) {
        this.close();
      }
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