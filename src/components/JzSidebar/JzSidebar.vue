<template>
  <div ref="wrapper" class="wrapper">
    <div v-if="value" class="bm-overlay" @click="closeMenu"></div>
    <div
      ref="sideNav"
      class="bm-menu"
      :class="{ 'bm-menu-active': value, right: right }"
      :style="width && `width: ${width}px`"
    >
      <nav class="bm-item-list">
        <slot name="content"></slot>
      </nav>
      <span
        class="bm-cross-button cross-style"
        @click="closeMenu"
        :class="{ hidden: !crossIcon }"
      >
        <!-- TO DO: Add support to custom close icon (passed by props or slot) -->
        <span
          v-for="(x, index) in 2"
          :key="x"
          class="bm-cross"
          :style="{
            position: 'absolute',
            width: '2px',
            height: '20px',
            transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)',
          }"
        ></span>
      </span>
    </div>
    <div class="navigation d-inline-flex">
      <div
        class="navigation-button"
        ref="bmBurgerButton"
        @click="openMenu"
        :class="{ 'is-hidden': !burgerIcon }"
      >
        <div class="navigation-icon" :key="'index'">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script src="./JzSidebar.js"></script>

<style scoped lang="scss">
.wrapper {
  height: auto !important;
}

.bm-menu {
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &.right {
    left: auto;
    right: 0;
    &:not(.bm-menu-active) {
      transform: translateX(100%);
    }
  }
}
</style>