import {registerReducer} from 'store';

const modules = {};

export default module = (store) => (name, moduleProvider) => {
  if(module.hasOwnProperty(name)) {
    return Promise.resolve(module[name]);
  }
  else {
    return moduleProvider.then(mod => {
      registerReducer(store, name, mod.reducer);
      return mod;
    });
  }
}