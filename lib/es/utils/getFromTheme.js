import { theme } from 'styled-tools';
import { theme as involves } from '../theme';
export default (function (path) {
  var defaultThemePath = path.split('.').reduce(function (_, x) {
    return _[x];
  }, involves);
  return theme(path, defaultThemePath);
});