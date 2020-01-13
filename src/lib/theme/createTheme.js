import { involves } from './involves';

const merge = (target, source) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
  }

  Object.assign(target || {}, source)
  return target
};

// eslint-disable-next-line arrow-body-style
export const createTheme = (theme) => {
  return merge(involves, theme);
};
