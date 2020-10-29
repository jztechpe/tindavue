<template>
  <div id="app" class="container">
    <h3>Input counter</h3>

    <jz-input-counter v-model="quantity"></jz-input-counter>

    <div class="mt-5 mb-5">
      <button @click="isMenuOpen = true" class="button is-primary">
        Open Menu
      </button>
    </div>
    <jz-menu v-model="isMenuOpen" :categories="categories">
      <template v-slot:header>
        <a href="/">Home</a>
        <a href="#!">Mi cuenta</a>
        <a href="#!">Mis ordenes</a>
      </template>
      <template v-slot:footer>
        <div class="line">
          <label>Servicio al cliente</label>
        </div>

        <a href="#">Cambios y devoluciones</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos legales</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Contáctenos</a>
      </template>
    </jz-menu>

    <jz-dropdown :is-hoverable="true" :is-right="true">
      <template v-slot:trigger>
        <button class="button" @click="isDropDownOpen = true">
          Hover to open dropdown
        </button>
      </template>
      <template v-slot:content>
        <div class="dropdown-item is-large">
          This is a content Lorem ipsum, dolor sit amet consectetur adipisicing
          elit.
        </div>
      </template>
    </jz-dropdown>
    <jz-dropdown v-model="isDropdownOpen">
      <template v-slot:trigger>
        <button class="button" @click="isDropdownOpen = true">
          Click to open dropdown
        </button>
      </template>
      <template v-slot:content>
        <div class="dropdown-item is-large">
          This is a content Lorem ipsum, dolor sit amet consectetur adipisicing
          elit.
        </div>
      </template>
    </jz-dropdown>

    <jz-collapse>
      <template v-slot:title>
        <p>Aquí podría ir un título de página</p>
      </template>
      <template v-slot:content>
        <p>Aquí podría ir un título de págihhna</p>
      </template>
    </jz-collapse>

    <JzSelectFirstImage
      v-model="colorModel"
      title="Color"
      :items="colorItems"
      item-text="text"
      item-value="ImageSmall"
      :disabled="false"
    />

    <JzSelectList
      v-model="tallaModel"
      title="Talla"
      :items="tallaItems"
      item-text="text"
      item-value="value"
      :disabled="true"
    />
    <JzSelectList v-model="tallaModel2" title="Talla2" :items="['S', 'XS']" />

    <div class="my-5">
      <button class="button is-primary" @click="showLogin = true">
        Login Button
      </button>
    </div>

    <div class="my-5">
      <button class="button is-primary" @click="showRegister = true">
        Register Button
      </button>
    </div>

    <jz-modal v-model="showLogin" class="modal--sign">
      <template #header>
        <p class="has-text-centered is-flex-grow-1">Iniciar sesión</p>
      </template>
      <template #body>
        <jz-form
          :fields="loginFields"
          :successful="loginSuccessful"
          @submitForm="handleLoginSubmit"
        >
          <template slot="afterSubmit">
            <div class="field">
              <div class="control has-text-centered">
                <p class="mt-2">
                  ¿No tienes una cuenta? <a href="#">Regístrate</a>
                </p>
              </div>
            </div>
          </template>
        </jz-form>
      </template>
    </jz-modal>

    <jz-modal v-model="showRegister" class="modal--sign">
      <template #header>
        <p class="has-text-centered is-flex-grow-1">Crea tu cuenta</p>
      </template>
      <template #body>
        <jz-form
          :fields="registerFields"
          :successful="registerSuccessful"
          @submitForm="handleRegisterSubmit"
        >
          <template slot="success" slot-scope="row">
            <p class="has-text-centered mb-5">
              Cuenta creada satisfactoriamente
            </p>
            <p class="is-size-7 has-text-centered mb-1">Email</p>
            <p class="has-text-weight-bold has-text-centered">
              {{ row.data.Username.value }}
            </p>
            <p class="has-text-centered mt-3">
              <a
                type="submit"
                class="button is-primary is-uppercase has-text-weight-semibold py-2"
                >Ingresar</a
              >
            </p>
          </template>
        </jz-form>
      </template>
    </jz-modal>
  </div>
</template>

<script>
import "@juntoz/tindacss/scss/tinda.scss";
import JzInputCounter from "./components/JzInputCounter";
import JzMenu from "./components/JzMenu";
import JzCollapse from "./components/JzCollapse";
import JzSelectFirstImage from "./components/JzSelectFirstImage";
import JzSelectList from "./components/JzSelectList";
import JzModal from "./components/JzModal";
import JzDropdown from "./components/JzDropdown/JzDropdown";
import JzForm from "./components/JzForm/JzForm";

import categories from "./categories";

export default {
  name: "App",
  components: {
    JzInputCounter,
    JzMenu,
    JzCollapse,
    JzSelectFirstImage,
    JzSelectList,
    JzModal,
    JzDropdown,
    JzForm,
  },
  data() {
    return {
      showModal: false,
      showLogin: false,
      showRegister: false,
      loginSuccessful: false,
      registerSuccessful: false,
      registerFields: [
        {
          name: "firstName",
          type: "text",
          id: "register-firstname",
          placeholder: "Nombres",
          required: true,
        },
        {
          name: "lastName",
          type: "text",
          id: "register-lastname",
          placeholder: "Apellidos",
          required: true,
        },
        {
          name: "Username",
          type: "email",
          id: "register-email",
          placeholder: "Email",
          required: true,
        },
        {
          name: "Password",
          type: "password",
          id: "register-password",
          sinc: "rePassword",
          placeholder: "Contraseña",
          required: true,
          min: 8,
        },
        {
          name: "rePassword",
          type: "password",
          id: "register-repassword",
          placeholder: "Verificar contraseña",
          after: `<p class="help has-text-grey-light">*Contraseña con un mínimo de 8 caracteres</p>`,
          min: 8,
        },
        {
          name: "submit",
          type: "submit",
          id: "register-submit",
          value: "Crear",
        },
      ],
      loginFields: [
        {
          name: "Username",
          type: "email",
          id: "login-email",
          placeholder: "Email",
          required: true,
        },
        {
          name: "Password",
          type: "password",
          id: "register-password",
          placeholder: "Contraseña",
          required: true,
          enableShowPassword: true,
          after: `<div
                    class="field is-grouped is-justify-content-space-between is-align-items-center mb-4 mt-2"
                  >
                    <div class="control">
                      <label class="mb-0 pl-0">
                        <input type="checkbox" class="field-checkbox" />
                        Recordar mi cuenta
                      </label>
                    </div>
                    <div class="control">
                      <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                  </div>`,
        },
        {
          name: "submit",
          type: "submit",
          id: "register-submit",
          value: "Iniciar sesión",
        },
      ],
      quantity: 1,
      isMenuOpen: false,
      isDropdownOpen: false,
      categories: categories,
      colorModel: null,
      colorItems: [
        {
          text: "azul",
          ImageSmall:
            "https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/02cb8ef0e33811eabcf5b1535dd40a53.jpg",
        },
        {
          text: "azul 2",
          ImageSmall:
            "https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/02cb8ef0e33811eabcf5b1535dd40a53.jpg",
        },
        {
          text: "Verde",
          ImageSmall:
            "https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/2723e900e33811eabcf5b1535dd40a53.jpg",
        },
        {
          text: "Rojo",
          ImageSmall:
            "https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/2c799a60e7c211ea9c9b79761bb77924/5e024460e7c211ea9c9b79761bb77924.png",
        },
      ],
      tallaModel: "",
      tallaModel2: null,
      tallaItems: [
        { text: "S", value: "S", disabled: true },
        { text: "M", value: "M", disabled: false },
      ],
    };
  },
  methods: {
    handleLoginSubmit(data) {
      console.log(data);
      // this.loginSuccessful = true;
    },
    handleRegisterSubmit(data) {
      console.log(data);
      this.registerSuccessful = true;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
