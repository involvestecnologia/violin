import getFromTheme from './getFromTheme';

export default (type = 'regular') => ({
  default: getFromTheme(`palette.default.${type}`),
  primary: getFromTheme(`palette.primary.${type}`),
  accent: getFromTheme(`palette.accent.${type}`),
  done: getFromTheme(`palette.done.${type}`),
  error: getFromTheme(`palette.error.${type}`),
  alert: getFromTheme(`palette.alert.${type}`),
  progress: getFromTheme(`palette.progress.${type}`),
  white: getFromTheme('palette.system.white')
});