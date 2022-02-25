import '@jztechpe-pub/tindacss/scss/tinda.scss';
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
          text: 'Amarillo',
          ImageSmall:
            'https://jztechstgstocatalog.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/5b9fb7c0539111ec890cc31a5b8c3cfe/afb3bfb0838311eca58a610edcb063ca/c851a0f0838311eca58a610edcb063ca/3kg-iy0n1i-small-h4ojln.jpg'            
        },
        {
          text: 'Naranja',
          ImageSmall:
            'https://jztechstgstocatalog.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/5b9fb7c0539111ec890cc31a5b8c3cfe/afb3bfb0838311eca58a610edcb063ca/f5fadbf0838511ecb955911542e16835/9kg-vxrdaj-small-se0tsz.jpg'
        },
        {
          text: 'Verde',
          ImageSmall:
            'https://jztechstgstocatalog.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/5b9fb7c0539111ec890cc31a5b8c3cfe/afb3bfb0838311eca58a610edcb063ca/0c6f2670838611eca58a610edcb063ca/5kg-cgy6ag-small-cpmnut.jpg'
        },
        {
          text: 'Celeste',
          ImageSmall:
            'https://jztechstgstocatalog.blob.core.windows.net/products/b58ac3ec05f44414b674d9244e4538a0/5b9fb7c0539111ec890cc31a5b8c3cfe/afb3bfb0838311eca58a610edcb063ca/462a5b00838611ec88811385377fc138/7kg-26bl0s-small-cqxmzm.jpg'
        }
      ],
      tallaModel: '',
      tallaModel2: null,
      tallaItems: [
        { text: 'S', value: 'S', disabled: false },
        { text: 'M', value: 'M', disabled: false }
      ]
    };
  }
};
