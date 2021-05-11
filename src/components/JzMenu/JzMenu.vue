<template>
  <div ref="wrapper" class="wrapper" :class="{ 'bm-menu-full-desktop': fullDesktop }">
    <div v-if="value" class="bm-overlay" @click="closeMenu"></div>
    <div ref="sideNav" class="bm-menu" :class="{ 'bm-menu-active': value }">
      <nav class="bm-item-list">
        <slot name="header"></slot>

        <div class="line">
          <label>Categorías</label>
        </div>

        <!-- TODO: Now just have one deep -->
        <JzMenuDropdown
          :item="category"
          v-for="(category, key) in categories"
          :key="key"
          :fullDesktop="fullDesktop"
        />

        <slot name="footer"></slot>
      </nav>
      <span
        class="bm-cross-button cross-style"
        @click="closeMenu"
        :class="{ hidden: !crossIcon }"
      >
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

<script>
import JzMenuDropdown from "./JzMenuDropdown.vue";

export default {
  name: "JzMenu",
  components: {
    JzMenuDropdown,
  },
  props: {
    value: null,
    categories: {
      type: Array,
      default: () => [],
    },
    right: {
      type: Boolean,
      required: false,
    },
    width: {
      type: [String],
      required: false,
      default: "300",
    },
    disableEsc: {
      type: Boolean,
      required: false,
    },
    noOverlay: {
      type: Boolean,
      required: false,
    },
    onStateChange: {
      type: Function,
      required: false,
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false,
    },
    wrapper: {
      type: Boolean,
      required: false,
      default: true,
    },
    fullDesktop: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    openMenu() {
      let value = true;
      this.$emit("input", value);

      if (this.right) {
        this.$refs.sideNav.style.left = "auto";
        this.$refs.sideNav.style.right = "0px";
      }
    },

    closeMenu() {
      let value = false;
      this.$emit("input", value);
    },

    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === "Escape" || e.keyCode === 27) {
        this.closeMenu();
      }
    },
    hasClass(element, className) {
      do {
        if (element.classList && element.classList.contains(className)) {
          return true;
        }
        element = element.parentNode;
      } while (element);
      return false;
    },
  },

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener("keyup", this.closeMenuOnEsc);
    }
  },
  destroyed: function () {
    document.removeEventListener("keyup", this.closeMenuOnEsc);
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          if (!oldValue && newValue) {
            this.openMenu();
          }
          if (oldValue && !newValue) {
            this.closeMenu();
          }
        });
      },
    },
    right: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            this.$refs.bmBurgerButton.style.left = "auto";
            this.$refs.bmBurgerButton.style.right = "36px";
            this.$refs.sideNav.style.left = "auto";
            this.$refs.sideNav.style.right = "0px";
            document.querySelector(".bm-burger-button").style.left = "auto";
            document.querySelector(".bm-burger-button").style.right = "36px";
            document.querySelector(".bm-menu").style.left = "auto";
            document.querySelector(".bm-menu").style.right = "0px";
            document.querySelector(".cross-style").style.right = "250px";
          });
        }
        if (newValue) {
          if (this.$refs.bmBurgerButton.hasAttribute("style")) {
            this.$refs.bmBurgerButton.removeAttribute("style");
            this.$refs.sideNav.style.right = "auto";
            document
              .querySelector(".bm-burger-button")
              .removeAttribute("style");
            document.getElementById("sideNav").style.right = "auto";
            document.querySelector(".cross-style").style.right = "0px";
          }
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: auto !important;
}
</style>