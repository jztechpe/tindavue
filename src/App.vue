<template>
  <div id="app">
    <h3>Input counter</h3>

    <jz-input-counter v-model="quantity"></jz-input-counter>

    <jz-menu :categories="categories" />

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
    <JzSelectList v-model="tallaModel2" title="Talla2" :items="['S','XS']" />

    <JzModal v-model="showModal" >

      <template #body> Body </template>
    </JzModal>
  </div>
</template>

<script>
import 'LifemilesTheme/main.scss';
import JzInputCounter from './components/JzInputCounter';
import JzMenu from './components/JzMenu';
import JzCollapse from './components/JzCollapse';
import JzSelectFirstImage from './components/JzSelectFirstImage';
import JzSelectList from './components/JzSelectList';
import JzModal from './components/JzModal';

export default {
  name: 'App',
  components: {
    JzInputCounter,
    JzMenu,
    JzCollapse,
    JzSelectFirstImage,
    JzSelectList,
    JzModal,
  },
  data() {
    return {
      showModal:false,
      quantity: 1,
      categories: [
        {
          name: 'Supermercados',
          children: [
            {
              name: 'Alimentos',
              path: '/categoria/supermercado-alimentos',
              link: '/link'
            },
            {
              name: 'Bebidas',
              path: '/categoria/supermercado-bebidas',
            },
            {
              name: 'Licores',
              path: '/categoria/supermercado-licores',
            },
          ],
        },
        {
          name: 'Tecnología y electronica',
          children: [
            {
              name: 'Celulares y tablets ',
              path: '/categoria/celulares',
            },
            {
              name: 'Computación',
              path: '/categoria/bebidas',
            },
            {
              name: 'TV, audio y video',
              path: '/categoria/tv',
            },
            {
              name: 'Electrodomesticos mayores',
              path: '/categoria/electrodomesticos',
            },
            {
              name: 'Electrodomesticos menores',
              path: '/categoria/electrodomesticos',
            },
            {
              name: 'Accesorios',
              path: '/categoria/accesorios',
            },
          ],
        },
        {
          name: 'Hogar',
          children: [
            {
              name: 'Colchones',
              path: '/categoria/hogar-',
            },
            {
              name: 'Mobiliario',
              path: '/categoria/hogar-mobiliario',
            },
            {
              name: 'Remodelación',
              path: '/categoria/hogar-remodelacion',
            },
            {
              name: 'Accesorios',
              path: '/categoria/hogar-accesorios',
            },
            {
              name: 'Ferreteria',
              path: '/categoria/hogar-ferreteria',
            },
          ],
        },
        {
          name: 'Deportes',
          children: [
            {
              name: 'Bicicletas',
              path: '/categoria/deportes-bicicletas',
            },
            {
              name: 'Camping',
              path: '/categoria/deportes-camping',
            },
            {
              name: 'Fitness',
              path: '/categoria/deportes-fitness',
            },
            {
              name: 'Patinetas',
              path: '/categoria/deportes-patinetas',
            },
            {
              name: 'Accesorios',
              path: '/categoria/deportes-accesorios',
            },
          ],
        },
        {
          name: 'Moda',
          children: [
            {
              name: 'Hombre/Mujeres',
              path: '/categoria/moda-hombres-mujeres',
            },
            {
              name: 'Deportiva',
              path: '/categoria/moda-deportiva',
            },
            {
              name: 'Calzados',
              path: '/categoria/moda-calzados',
            },
            {
              name: 'Ropa interior / Home wear',
              path: '/categoria/moda-ropa-interior',
            },
            {
              name: 'Swimwear',
              path: '/categoria/moda-swimwear',
            },
            {
              name: 'Accesorios',
              path: '/categoria/moda-accesorios',
            },
            {
              name: 'Relojeria',
              path: '/categoria/moda-relojeria',
            },
            {
              name: 'Joyeria',
              path: '/categoria/moda-joyeria',
            },
            {
              name: 'Opticas',
              path: '/categoria/moda-opticas',
            },
          ],
        },
        {
          name: 'Libros',
          children: [
            {
              name: 'Libros',
              path: '/categoria/libros-libros',
            },
          ],
        },
        {
          name: 'Entretenimiento',
          children: [
            {
              name: 'Suscripciones/Revistas',
              path: '/categoria/entretenimiento-revistas',
            },
            {
              name: 'Boletas eventos',
              path: '/categoria/entretenimiento-boletas-eventos',
            },
            {
              name: 'Gift cards',
              path: '/categoria/entretenimiento-gift-cards',
            },
            {
              name: 'Servicios/ cursos',
              path: '/categoria/entretenimiento-servicios-cursos',
            },
            {
              name: 'Variedades/ Otros',
              path: '/categoria/entretenimiento-variedades-otros',
            },
          ],
        },
        {
          name: 'Mascotas',
          children: [
            {
              name: 'Perros',
              path: '/categoria/mascotas-perros',
            },
            {
              name: 'Gatos',
              path: '/categoria/mascotas-gatos',
            },
            {
              name: 'Otros Accesorios',
              path: '/categoria/mascotas-otros-accesorios',
            },
          ],
        },
        {
          name: 'Niños y Bebes',
          children: [
            {
              name: 'Juegos',
              path: '/categoria/ninos-y-bebes-juegos',
            },
            {
              name: 'Juguetes',
              path: '/categoria/ninos-y-bebes-juguetes',
            },
            {
              name: 'Moda',
              path: '/categoria/ninos-y-bebes-moda',
            },
            {
              name: 'Accesorios',
              path: '/categoria/ninos-y-bebes-accesorios',
            },
          ],
        },
        {
          name: 'Salud y Belleza',
          children: [
            {
              name: 'Farmacias',
              path: '/categoria/salud-belleza-farmacias',
            },
            {
              name: 'Belleza y cuidado personal',
              path: '/categoria/salud-belleza-belleza-y-cuidado-personal',
            },
            {
              name: 'Perfumeria',
              path: '/categoria/salud-belleza-perfumeria',
            },
          ],
        },
        {
          name: 'Auto y transporte',
          children: [
            {
              name: 'Accesorios',
              path: '/categoria/auto-y-transportes-accesorios',
            },
            {
              name: 'Aceites',
              path: '/categoria/auto-y-transportes-aceites',
            },
            {
              name: 'Baterias',
              path: '/categoria/auto-y-transportes-baterias',
            },
            {
              name: 'Llantas',
              path: '/categoria/auto-y-transportes-llantas',
            },
            {
              name: 'Vehiculos',
              path: '/categoria/auto-y-transportes-vehiculos',
            },
          ],
        },
        {
          name: 'Emprendedores',
          children: [
            {
              name: 'Accesorios',
              path: '/categoria/emprendedores-accesorios',
            },
            {
              name: 'Arte',
              path: '/categoria/emprendedores-arte',
            },
            {
              name: 'Belleza',
              path: '/categoria/emprendedores-belleza',
            },
            {
              name: 'Hogar y decoración',
              path: '/categoria/emprendedores-hogar-y-decoracion',
            },
            {
              name: 'Joyeria',
              path: '/categoria/emprendedores-joyeria',
            },
            {
              name: 'Mascotas',
              path: '/categoria/emprendedores-mascotas',
            },
            {
              name: 'Moda ',
              path: '/categoria/emprendedores-moda',
            },
            {
              name: 'Niños',
              path: '/categoria/emprendedores-ninos',
            },
          ],
        },
        {
          name: 'Cross Border',
          children: [
            {
              name: 'Hogar',
              path: '/categoria/cross-border-hogar',
            },
            {
              name: 'Moda',
              path: '/categoria/cross-border-moda',
            },
            {
              name: 'Tecnologia',
              path: '/categoria/cross-border-tecnologia',
            },
          ],
        },
      ],
      colorModel: null,
      colorItems: [
        {
          text: 'azul',
          disabled: true,
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/02cb8ef0e33811eabcf5b1535dd40a53.jpg',
        },
        {
          text: 'Verde',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/2723e900e33811eabcf5b1535dd40a53.jpg',
        },
        {
          text: 'Rojo',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/2c799a60e7c211ea9c9b79761bb77924/5e024460e7c211ea9c9b79761bb77924.png',
        },
      ],
      tallaModel: '',
      tallaModel2: null,
      tallaItems: [{"text":"S","value":"S","disabled":true},{"text":"M","value":"M","disabled":false}],
    };
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
