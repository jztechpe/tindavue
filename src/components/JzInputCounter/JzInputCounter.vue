<template>
  <section class="input-counter">
    <div class="input-counter_content">
      <button
        class="input-counter_button"
        :class="classDecrementButton"
        @click="decrement"
      >
        -
      </button>
      <span class="input-counter_value">{{ value }}</span>
      <button
        class="input-counter_button"
        :class="classIncrementButton"
        @click="increment"
      >
        +
      </button>
    </div>
    <div class="input-counter_loading"></div>
  </section>
</template>

<script src="./JzInputCounter.js"></script>