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

<style lang="scss" scoped>
  // Variables
  $color-primary: #f5333f;
  $color-primary-light: #f5434f;
  $color-primary-dark: #ec212f;

  $color-secondary: #3f535d;
  $color-secondary-dark: #2e3d44;

  $color-interface: #2269c9;
  $color-interface-dark: #1e59a9;

  $color-text: #222222;
  $color-text-grey: #656970;
  $color-text-light: #808d93;
  $color-white: #ffffff;

  $color-forms: #bfc6c9 !default;

  $background-color: #f2f4f4;

  $color-gold: #cdb989;

  $box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  .modal {
    &--sign {
      .modal {
        &-card {
          max-width: 500px;
          border-radius: 0;
          &-head {
            background: $background-color;
            border-bottom: none;
            color: $color-primary;
            font-size: 1.4rem;
            padding: .6rem 1.5rem;
            border-radius: 0;
          }
          &-body {
            padding: 1.5rem;
          }
        }
      }
    }
  }
</style>