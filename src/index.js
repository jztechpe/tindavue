import * as components from './components';

const ComponentLibrary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

export default ComponentLibrary;
