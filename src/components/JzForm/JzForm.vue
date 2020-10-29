<template>
  <div>
    <slot
      v-if="hasSuccessMessage && successful"
      name="success"
      :email="data.email.value"
    ></slot>
    <div v-if="!successful">
      <p class="has-text-centered mb-5">Ingresa tu email y contraseña</p>
      <div class="notification is-danger py-2" v-if="error">
        <button class="delete" @click="error = false"></button>
        {{ message }}
      </div>
      <form class="form--sign" @submit="checkForm">
        <div v-for="(field, i) in fields" :key="field.id" class="field mb-4">
          <p
            class="control"
            :class="{ 'has-icons-right': field.enableShowPassword }"
          >
            <input
              :type="
                field.type === 'password'
                  ? showPassword
                    ? 'text'
                    : field.type
                  : field.type === 'email'
                  ? 'text'
                  : field.type
              "
              :name="field.name"
              :id="field.id"
              :class="{
                input: [
                  'text',
                  'number',
                  'email',
                  'password',
                  'url',
                  'tel',
                ].includes(field.type),
                'button is-primary is-uppercase has-text-weight-semibold py-2': [
                  'button',
                  'submit',
                ].includes(field.type),
              }"
              :value="field.value"
              :placeholder="field.placeholder"
              v-model="data[field.name].value"
            />
            <button
              v-if="field.enableShowPassword"
              class="icon is-small is-right show-password"
              :class="{ active: showPassword }"
              type="button"
              @click="changePasswordVisibility"
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 461.312 461.312"
                style="enable-background: new 0 0 461.312 461.312"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                  S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                  c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                  />
                </g>
                <g>
                  <path
                    d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                  c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                  C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                  s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                  />
                </g>
              </svg>
            </button>
          </p>
          <div v-if="field.after" v-html="field.after"></div>
        </div>
        <slot name="afterSubmit"></slot>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "JzForm",
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    hasSuccessMessage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data: null,
      showPassword: false,
      error: false,
      successful: false,
      message: "",
    };
  },
  created() {
    let obj = {};
    this.fields.map((item) => {
      obj[item["name"]] = {
        type: item["type"],
        value: item["value"] || "",
        sinc: item["sinc"] || null,
      };
    });
    this.data = obj;
  },
  methods: {
    changePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validation() {
      for (let key of Object.keys(this.data)) {
        // Verify if all fields are filled
        if (!this.data[key].value) {
          this.message = "Debe completar todos los campos";
          return false;
        }

        // Verify if email field is valid
        if (this.data[key].type === "email") {
          if (!this.$options.filters.isEmail(this.data[key].value)) {
            this.message = "El email ingresado no es válido";
            return false;
          }
        }

        // Verify if password has 8 characters at least
        if (this.data[key].type === "password") {
          if (this.data[key].value.length < 8) {
            this.message = "Tu contraseña debe tener al menos 8 caracteres";
            return false;
          }

          // Verify if passwords matches
          if (this.data[key].sinc) {
            let reference = this.data[key].sinc;
            if (this.data[reference].value !== this.data[key].value) {
              this.message = "Las contraseñas no coinciden";
              return false;
            }
          }
        }
      }

      return true;
    },
    checkForm(event) {
      if (this.validation()) {
        // Has no errors
        this.error = false;
        // What do you do?
        if (this.hasSuccessMessage) {
          this.successful = true;
        } else {
          // Submit form
          return true;
        }
      }

      this.error = true;
      event.preventDefault();
    },
  },
};
</script>

<style lang="scss">
.form--sign {
  input {
    &[type="checkbox"] {
      appearance: checkbox;
      position: static;
      width: initial;
      height: initial;
      opacity: 1;
    }
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
        // fill: $color-primary;
      }
    }
    svg {
      width: 22px;
      // fill: $color-text-grey;
    }
  }
}
</style>