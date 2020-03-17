/* eslint-disable no-plusplus */
export const setHighlightNavigation = (array, direction, current, callback) => {
  const down = direction === 'DOWN';
  const up = direction === 'UP';

  for (
    let i = current;
    down ? (i < array.length) : (i >= 0);
    down ? (i++) : (i--)
  ) {
    // down key
    if (down && i >= array.length - 1) {
      setHighlightNavigation(array, 'DOWN', -1, callback);
      break;
    }
    if (down && array[i + 1].value) {
      callback(i + 1);
      break;
    }
    // up key
    if (up && i <= 0) {
      setHighlightNavigation(array, 'UP', array.length, callback);
      break;
    }
    if (up && array[i - 1].value) {
      callback(i - 1);
      break;
    }
  }
};

export const setFirstHighlight = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value) {
      callback(i);
      break;
    }
  }
};

export const setSelectOption = (array, value, setSelected) => (
  array.map((opt) => {
    const item = opt;
    if (item.value) {
      if (item.value === value) {
        item.selected = true;
        setSelected(item);
      } else {
        delete item.selected
      }
    } else if (item.options) {
      item.options.map((sub) => {
        const subItem = sub;
        if (subItem.value === value) {
          subItem.selected = true;
          setSelected(subItem);
        } else {
          delete subItem.selected;
        }
        return subItem;
      })
    }
    return item;
  })
);

export const highlightText = (text, filter) => {
  const index = text.toLowerCase().indexOf(filter.toLowerCase());
  return `${text.substring(0, index)}<mark>${text.substring(index, index + filter.length)}</mark>${text.substring(index + filter.length)}`;
};
