<template>
  <div ref="wrapper" class="wrapper">
    <div ref="sideNav" class="bm-menu">
      <nav class="bm-item-list">
        <a href="/">Home</a>
        <a href="#">Mi cuenta</a>
        <a href="#">Mis ordenes <span class="text-right"><img src="../../../../LifemilesTheme/src/icons/package.svg" alt="insertar SVG con la etiqueta image" /></span></a>
        <a href="//juntoz.xyz/nuestras-tiendas">Nuestras tiendas <span class="text-right"><img src="../../../../LifemilesTheme/src/icons/online-shopping.svg" alt="insertar SVG con la etiqueta image" /></span></a>

       <div class="line">
         <label>Categorías</label>
       </div>
        
       
        <!-- TODO: Now just have one deep -->
        <JzMenuDropdown
          :item="category"
          v-for="(category, key) in categories"
          :key="key"
        />

        <div class="line">
          <label>Servicio al cliente</label>
        </div>
        
        <a href="#">Cambios y devoluciones</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos legales</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Contáctenos</a>
      </nav>
      <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
        <span
          v-for="(x, index) in 2"
          :key="x"
          class="bm-cross"
          :style="{ position: 'absolute', width: '2px', height: '20px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}"
        ></span>
      </span>
    </div>

    <div class="navigation d-inline-flex">
      <div
        ref="bmBurgerButton"
        class="navigation-button"
        @click="openMenu"
        :class="{ hidden: !burgerIcon }"
      >
        <div class="navigation-icon" :key="'index'">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import JzMenuDropdown from './JzMenuDropdown';

export default {
  name: 'JzMenu',
  data() {
    return {
      isSideBarOpen: false
    };
  },
  components: {
    JzMenuDropdown
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    wrapper: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    openMenu() {
      this.$emit('openMenu');
      this.isSideBarOpen = true;
      this.$refs.sideNav.classList.add('bm-menu-active');

      if (!this.noOverlay) {
        this.$refs.wrapper.classList.add('bm-overlay');
        // document.body.classList.add('bm-overlay');
      }
      if (this.right) {
        this.$refs.sideNav.style.left = 'auto';
        this.$refs.sideNav.style.right = '0px';
      }
      /* this.$nextTick(function() {
            this.$refs.sideNav.style.width = this.width
              ? this.width + 'px'
              : '300px';
              
          });*/
    },

    closeMenu() {
      this.$emit('closeMenu');
      this.isSideBarOpen = false;
      this.$refs.wrapper.classList.remove('bm-overlay');
      // document.body.classList.remove('bm-overlay');
      /*this.$refs.sideNav.style.width = '0px';*/
      this.$refs.sideNav.classList.remove('bm-menu-active');
    },

    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeMenu();
      }
    },
    documentClick(e) {
      let element = this.$refs.bmBurgerButton;
      let target = null;
      if (e && e.target) {
        target = e.target;
      }

      if (
        element &&
        element !== target &&
        !element.contains(target) &&
        !this.hasClass(target, 'bm-menu') &&
        this.isSideBarOpen &&
        !this.disableOutsideClick
      ) {
        this.closeMenu();
      } else if (
        element &&
        this.hasClass(target, 'bm-menu') &&
        this.isSideBarOpen &&
        this.closeOnNavigation
      ) {
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
    }
  },

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc);
    }
  },
  created: function() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.closeMenuOnEsc);
    document.removeEventListener('click', this.documentClick);
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
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            this.$refs.bmBurgerButton.style.left = 'auto';
            this.$refs.bmBurgerButton.style.right = '36px';
            this.$refs.sideNav.style.left = 'auto';
            this.$refs.sideNav.style.right = '0px';
            document.querySelector('.bm-burger-button').style.left = 'auto';
            document.querySelector('.bm-burger-button').style.right = '36px';
            document.querySelector('.bm-menu').style.left = 'auto';
            document.querySelector('.bm-menu').style.right = '0px';
            document.querySelector('.cross-style').style.right = '250px';
          });
        }
        if (newValue) {
          if (this.$refs.bmBurgerButton.hasAttribute('style')) {
            this.$refs.bmBurgerButton.removeAttribute('style');
            this.$refs.sideNav.style.right = 'auto';
            document
              .querySelector('.bm-burger-button')
              .removeAttribute('style');
            document.getElementById('sideNav').style.right = 'auto';
            document.querySelector('.cross-style').style.right = '0px';
          }
        }
      }
    }
  }
};
</script>

<style >


</style>