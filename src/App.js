import '@juntoz/tindacss/scss/tinda.scss';
import JzInputCounter from './components/JzInputCounter';
import JzMenu from './components/JzMenu';
import JzSidebar from './components/JzSidebar/';
import JzCollapse from './components/JzCollapse';
import JzSelectFirstImage from './components/JzSelectFirstImage';
import JzSelectList from './components/JzSelectList';
import JzModal from './components/JzModal';
import JzDropdown from './components/JzDropdown/';

import categories from './categories';

export default {
  name: 'App',
  components: {
    JzInputCounter,
    JzMenu,
    JzSidebar,
    JzCollapse,
    JzSelectFirstImage,
    JzSelectList,
    JzModal,
    JzDropdown
  },
  data() {
    return {
      showModal: false,
      quantity: 1,
      isMenuOpen: false,
      isMenuFullOpen: false,
      isSidebarOpen: false,
      sidebarRight: false,
      isDropdownOpen: false,
      categories: categories,
      colorModel: null,
      colorItems: [
        {
          text: 'azul',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/02cb8ef0e33811eabcf5b1535dd40a53.jpg'
        },
        {
          text: 'azul 2',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/02cb8ef0e33811eabcf5b1535dd40a53.jpg'
        },
        {
          text: 'Verde',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/70fc4ab0e32c11eaaee3b983d622c2a4/2723e900e33811eabcf5b1535dd40a53.jpg'
        },
        {
          text: 'Rojo',
          ImageSmall:
            'https://jzcatalogstg.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/9df301a0e24911eaab06d941f3746bf3/2c799a60e7c211ea9c9b79761bb77924/5e024460e7c211ea9c9b79761bb77924.png'
        }
      ],
      tallaModel: '',
      tallaModel2: null,
      tallaItems: [
        { text: 'S', value: 'S', disabled: true },
        { text: 'M', value: 'M', disabled: false }
      ]
    };
  }
};
