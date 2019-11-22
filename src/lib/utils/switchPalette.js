import { theme } from 'styled-tools';
import { theme as involves } from '../theme';

const switchPalette = (type = 'regular') => ({
  default: theme(`palette.default.${type}`, involves.palette.default[type]),
  primary: theme(`palette.primary.${type}`, involves.palette.primary[type]),
  accent: theme(`palette.accent.${type}`, involves.palette.accent[type]),
  done: theme(`palette.done.${type}`, involves.palette.done[type]),
  error: theme(`palette.error.${type}`, involves.palette.error[type]),
  alert: theme(`palette.alert.${type}`, involves.palette.alert[type]),
  progress: theme(`palette.progress.${type}`, involves.palette.progress[type]),
  white: theme('palette.system.white', involves.palette.system.white)
});

export default switchPalette;
