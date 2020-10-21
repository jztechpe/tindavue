<template>
  <section class="jz-menu-dropdown" @click="onClickItem()">
    <div class="jz-menu-dropdown-item dropdown-item" :class="classX">
      <p>{{ item.name }}</p>

      <svg
        class="jz-menu-dropdown-icon"
        fill="currentColor"
        viewBox="0 0 20 20"
        v-if="!isLeaf"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <template v-if="!isLeaf">
      <TransitionExpand>
        <div class="jz-menu-dropdown-children" v-if="isOpen">
          <JzMenuDropdown
            :item="subItem"
            v-for="(subItem, i) in item.children"
            :key="i"
          />
        </div>
      </TransitionExpand>
    </template>
  </section>
</template>

<script>
import JzMenuDropdown from "./JzMenuDropdown";
import TransitionExpand from "../transitions/TransitionExpand.vue";

export default {
  name: "JzMenuDropdown",
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  components: {
    JzMenuDropdown,
    TransitionExpand,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isLeaf() {
      return !this.item.hasOwnProperty("children") || !this.item.children.length;
    },
    classX() {
      return {
        "dropdown-item-active": this.isOpen,
        "dropdown-item-no-active": !this.isOpen,
      };
    },
  },
  methods: {
    onClickItem() {
      if (this.isLeaf) {
        window.location.href = this.item.link;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
  },
};
</script>

<style lang="scss">
</style>