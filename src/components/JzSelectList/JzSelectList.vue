<template>
  <section class="select-list" :class="classes">
    <label class="select-list_label">{{title}}</label>
    <div class="select-list_content">
      <button
        class="select-list_item"
        :class="classItem(item)"
        @click="selectItem(item)"
        v-for="(item, i) in items"
        :key="i"
      >{{item[itemValue]}}</button>
    </div>
  </section>
</template>

<script src="./JzSelectList.js"></script>