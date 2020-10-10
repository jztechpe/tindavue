<template>
  <section class="select-first-image" :class="classes">
    <label class="select-first-image_label">
      {{title}}
      <span v-html="valueTextToShow"></span>
    </label>
    <div class="select-first-image_content">
      <div
        class="select-first-image_item"
        :class="classItem(item)"
        @click="selectItem(item)"
        v-for="(item, i) in items"
        :key="i"
      >
        <img class="select-first-image_item-img" :src="item[itemValue]" />
      </div>
    </div>
  </section>
</template>

<script src="./JzSelectFirstImage.js"></script>