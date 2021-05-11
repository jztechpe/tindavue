<template>
  <div :class="classCollapse" class="collapse">
    <div class="collapse-item">
      <div class="collapse-item-title" @click="isOpen = !isOpen">
        <slot name="title"></slot>
      </div>
      <TransitionExpand>
        <div class="collapse-item-content" v-show="isOpen">
          <slot name="content"></slot>
        </div>
      </TransitionExpand>
    </div>
  </div>
</template>

<script src="./JzCollapse.js"></script>