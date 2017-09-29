import {registerReducer} from 'store';

const modules = {};

export default module = (store) => (name, moduleProvider) => {
  if(modules.hasOwnProperty(name)) {
    return Promise.resolve(modules[name]);
  }
  else {
    return moduleProvider.then(mod => {
      registerReducer(store, name, mod.reducer);
      return mod;
    });
  }
}
