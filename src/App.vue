<template>
  <div id="app" class="container">
    <h3 class="mb-3">Modal</h3>
    <button @click="showModal = true" class="button is-primary">
      Open Modal
    </button>
    <jz-modal v-model="showModal">
      <template slot="header"> header </template>
      <template slot="body"> body </template>
      <template slot="footer"> footer </template>
    </jz-modal>

    <h3 class="mb-3">Input counter</h3>
    <jz-input-counter v-model="quantity"></jz-input-counter>

    <hr />
    <h3>JzMenu</h3>
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

    <hr />
    <h3>JzMenu Full Desktop</h3>
    <div class="mt-5 mb-5">
      <button @click="isMenuFullOpen = true" class="button is-primary">
        Open Menu Full Desktop
      </button>
    </div>
    <jz-menu
      v-model="isMenuFullOpen"
      :categories="categories"
      :fullDesktop="true"
      :burgerIcon="false"
    >
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

    <hr />

    <h3>JzDropdown</h3>

    <jz-dropdown :is-hoverable="true" :is-right="true">
      <template v-slot:trigger>
        <button class="button is-info" @click="isDropDownOpen = true">
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
        <button
          class="button is-info is-light ml-3"
          @click="isDropdownOpen = true"
        >
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

    <hr />
    <h3>JzSidebar</h3>

    <button class="button is-info is-light" @click="isSidebarOpen = true">
      Open Sidebar
    </button>

    <jz-sidebar v-model="isSidebarOpen" :burger-icon="false">
      <template #content>
        <div class="m5-3 ml-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          tempora odit? Optio soluta aperiam enim, possimus obcaecati accusamus
          perferendis, aliquid deserunt cum quas repellendus adipisci. Corporis
          labore quidem ad. Magnam!
        </div>
      </template>
    </jz-sidebar>
    <button class="button is-info is-light" @click="sidebarRight = true">
      Open from right
    </button>

    <jz-sidebar v-model="sidebarRight" :burger-icon="false" right width="360">
      <template #content>
        <div class="m5-3 ml-5" style="heigth: 200vh">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          tempora odit? Optio soluta aperiam enim, possimus obcaecati accusamus
          perferendis, aliquid deserunt cum quas repellendus adipisci. Corporis
          labore quidem ad. Magnam!
        </div>
      </template>
    </jz-sidebar>

    <hr />
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
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
