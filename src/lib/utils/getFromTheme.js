import { theme } from 'styled-tools';
import { theme as involves } from '../theme';

export default (path) => {
  const valuePath = path.split('.').reduce((_, x) => _[x], involves);
  return theme(path, valuePath);
}
