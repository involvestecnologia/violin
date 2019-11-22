import { theme } from 'styled-tools';
import { theme as involves } from '../theme';

export default (path) => theme(path, involves[path])
