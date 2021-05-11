import TransitionExpand from '../transitions/TransitionExpand.vue';

export default {
  name: 'JzCollapse',
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    TransitionExpand,
  },
  created() {
    this.isOpen = this.open;
  },
  watch: {
    isOpen: function (val) {
      if (val) {
        console.log('Jzcollapse Abierto');
        this.$emit('show');
      }
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    classCollapse() {
      return {
        'collapse-open': this.isOpen,
        'collapse-close': !this.isOpen,
      };
    },
  },
};