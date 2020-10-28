<template>
  <div>
    <p class="has-text-centered mb-5">Ingresa con tu email y contraseña</p>
    <div class="notification is-danger py-2" v-if="error">
      <button class="delete" @click="error = false"></button>
      {{ message }}
    </div>
    <form class="sign-form sign-form--signin">
      <div class="field mb-4">
        <p class="control">
          <input class="input field-email" type="email" placeholder="Email">
        </p>
      </div>
      <div class="field mb-4">
        <p class="control has-icons-right">
          <input class="input field-password" :type="showPassword ? 'text' : 'password'" placeholder="Contraseña">
          <button class="icon is-small is-right show-password" :class="{'active': showPassword}" type="button" @click="changePasswordVisibility">
            <svg version="1.1" id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 461.312 461.312" style="enable-background:new 0 0 461.312 461.312;" xml:space="preserve">
              <g>
                <path d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"/>
              </g>
              <g>
                <path d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"/>
              </g>
            </svg>
          </button>
        </p>
      </div>
      
      <div class="field is-grouped is-justify-content-space-between is-align-items-center mb-4">
        <div class="control">
          <label class="mb-0">
            <input type="checkbox" class="field-checkbox">
            Recordar mi cuenta
          </label>
        </div>
        <div class="control">
          <a href="#" class="sign-form__link">¿Olvidaste tu contraseña?</a>
        </div>
      </div>

      <div class="field pt-2">
        <div class="control has-text-centered">
          <button type="submit" class="button is-primary is-uppercase has-text-weight-semibold py-2" @click="submitForm">Iniciar sesión</button>
        </div>
        <div class="control has-text-centered">
          <p class="mt-2">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'JzLoginForm',
    data() {
      return {
        showPassword: false,
        form: null,
        error: false,
        message: '',
      }
    },
    mounted() {
      this.form = document.querySelector('.sign-form--signin')
    },
    methods: {
      changePasswordVisibility() {
        this.showPassword = !this.showPassword
      },
      validation() {
        let email = this.form.querySelector('.field-email')
        let password = this.form.querySelector('.field-password')

        // Verify if all fields are filleds
        if (!email.value.length || !password.value.length) {
          this.message = 'Debe completar todos los campos'
          return false
        }

        // Verify if email field is valid
        if (!this.$options.filters.isEmail(email.value)) {
          this.message = 'El email ingresado no es válido'
          return false
        }

        return true
      },
      submitForm(event) {
        event.preventDefault()
        if (this.validation()) {
          this.form.submit()
        } else {
          this.error = true
        }
      }
    }
  }
</script>

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

  input {
    &[type="checkbox"] {
      appearance: checkbox;
      position: static;
      width: initial;
      height: initial;
      opacity: 1;
    }
  }
  label {
    padding-left: 0;
  }
  .sign-form {
    &__link {
      font-size: 14px;
    }
  }
  .field {
    &:not(:last-child) {
      margin-bottom: 1.4rem;
    }
    p {
      font-size: 14px;
      a {
        color: $color-primary;
        &:hover {
          color: $color-primary-dark;
        }
      }
    }
  }
  .input {
    background: #EBEBEB;
    border: none;
    box-shadow: none;
    cursor: initial;
    padding: .65rem .85rem;
    height: initial;
    &, &::placeholder {
      color: $color-text;
      font-size: 14px;
    }
  }
  .button {
    border-radius: 20px;
    width: 210px;
    line-height: 1;
    height: initial;
  }
  .show-password {
    background: transparent;
    cursor: pointer;
    height: 100% !important;
    pointer-events: initial !important;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &.active {
      svg {
        fill: $color-primary;
      }
    }
    svg {
      width: 22px;
      fill: $color-text-grey;
    }
  }
</style>