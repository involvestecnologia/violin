import { involves } from './involves';

var merge = function merge(target, source) {
  // eslint-disable-next-line no-restricted-syntax
  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
}; // eslint-disable-next-line arrow-body-style


export var createTheme = function createTheme(theme) {
  return merge(involves, theme);
};