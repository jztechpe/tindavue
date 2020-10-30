export default {
  name: 'JzSidebar',
  props: {
    value: null,
    right: {
      type: Boolean,
      required: false,
    },
    width: {
      type: [String],
      required: false,
      default: '300',
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
  },
  methods: {
    openMenu() {
      let value = true;
      this.$emit('input', value);

      if (this.right) {
        this.$refs.sideNav.style.left = 'auto';
        this.$refs.sideNav.style.right = '0px';
      }
    },

    closeMenu() {
      let value = false;
      this.$emit('input', value);
    },

    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === 'Escape' || e.keyCode === 27) {
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
      document.addEventListener('keyup', this.closeMenuOnEsc);
    }
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.closeMenuOnEsc);
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
  },
};
