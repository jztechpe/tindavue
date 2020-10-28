<template>
  <div>
    <div v-if="successful">
      <p class="has-text-centered mb-5">Cuenta creada satisfactoriamente</p>
      <p class="is-size-7 has-text-centered mb-1">Email</p>
      <p class="has-text-weight-bold has-text-centered">{{ email }}</p>
      <p class="has-text-centered mt-3">
        <a type="submit" class="button is-primary is-uppercase has-text-weight-semibold py-2">Ingresar</a>
      </p>
    </div>
    <div v-else>
      <p class="has-text-centered mb-5">Ingresa tu email y contraseña</p>
      <div class="notification is-danger py-2" v-if="error">
        <button class="delete" @click="error = false"></button>
        {{ message }}
      </div>
      <form class="sign-form sign-form--signup">
        <div class="field mb-4">
          <p class="control">
            <input class="input field-email" type="email" v-model="email"
             placeholder="Email">
          </p>
        </div>
        <div class="field mb-4">
          <p class="control has-icons-right">
            <input class="input field-password" type="password" v-model="password" placeholder="Contraseña">
          </p>
        </div>

        <div class="field mb-4">
          <p class="control has-icons-right">
            <input class="input field-re-password" type="password" placeholder="Verificar contraseña">
          </p>
          <p class="help has-text-grey-light">Contraseña con un mínimo de 8 caracteres</p>
        </div>

        <div class="field pt-2">
          <div class="control has-text-centered">
            <button type="submit" class="button is-primary is-uppercase has-text-weight-semibold py-2" @click="submitForm">Crear</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JzRegisterForm',
    data() {
      return {
        form: null,
        error: false,
        message: '',
        email: '',
        password: '',
        successful: false
      }
    },
    mounted() {
      this.form = document.querySelector('.sign-form--signup')
    },
    methods: {
      changePasswordVisibility() {
        this.showPassword = !this.showPassword
      },
      validation() {
        let email = this.form.querySelector('.field-email')
        let password = this.form.querySelector('.field-password')
        let rePassword = this.form.querySelector('.field-re-password')

        // Verify if all fields are filleds
        if (!email.value.length || !password.value.length || !rePassword.value.length) {
          this.message = 'Debe completar todos los campos'
          return false
        }

        // Verify if email field is valid
        if (!this.$options.filters.isEmail(email.value)) {
          this.message = 'El email ingresado no es válido'
          return false
        }

        // Verify if password has 8 characters at least
        if (password.value.length < 8 || rePassword.value.length < 8) {
          this.message = 'Tu contraseña debe tener al menos 8 caracteres'
          return false
        }

        // Verify if passwords matches
        if (password.value !== rePassword.value) {
          this.message = 'Las contraseñas no coinciden'
          return false
        }
        
        return true
      },
      submitForm(event) {
        event.preventDefault()
        if (this.validation()) {
          // this.form.submit()
          this.successful = true
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

  label {
    padding-left: 0;
  }
  .field {
    &:not(:last-child) {
      margin-bottom: 1.4rem;
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
</style>