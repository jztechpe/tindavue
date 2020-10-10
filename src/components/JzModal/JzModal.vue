<template>
  <div class="modal" :class="{'is-active': value}">
    <div class="modal-background" @click="$emit('input', false)"></div>
    <div class="modal-card">
      <header class="modal-card-head" v-if="$slots.header">
        <slot name="header">
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
        </slot>
      </header>
      <section class="modal-card-body">
        <slot name="body"></slot>
      </section>
      <footer class="modal-card-foot" v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
  <!-- <transition name="modal-fade">
    <div class="modal" :class="{'is-active': value}">
      <div class="modal-background"></div>

      <div class="modal-card">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-card-head" id="modalTitle" v-if="$slots.header">
            <slot name="header">
              <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
            </slot>
          </header>

          <section class="modal-body" id="modalDescription">
            <slot name="body">I'm the default body!</slot>
          </section>

          <footer class="modal-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>-->
</template>

<script src="./JzModal.js"></script>