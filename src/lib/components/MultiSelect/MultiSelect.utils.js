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

export const scrollToElement = (container, element) => {
  if (!element) return;
  const bottomElement = element.offsetTop
    + element.clientHeight;
  const topElement = element.offsetTop;
  const menuContainer = container.clientHeight;
  const containerScroll = container.scrollTop;

  if (bottomElement > menuContainer + containerScroll) {
    container.scroll(0, bottomElement - menuContainer);
  }
  if (topElement < containerScroll) {
    container.scroll(0, topElement);
  }
};

export const highlightFirstItemList = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value) {
      callback(i);
      break;
    }
  }
};

export const selectOption = (array = [], selected, setSelected) => {
  const selectedValue = selected || {}

  if (array.length === 0 && !!selectedValue.value) array.push(selectedValue)
  if (array.length === 0) return [];

  return array.map((opt) => {
    const item = opt;
    if (item.value) {
      if (item.value === selectedValue.value) {
        item.selected = true;
        if (setSelected) setSelected(item);
      } else {
        delete item.selected
      }
    } else if (item.options) {
      item.options.map((sub) => {
        const subItem = sub;
        if (subItem.value === selectedValue.value) {
          subItem.selected = true;
          if (setSelected) setSelected(subItem);
        } else {
          delete subItem.selected;
        }
        return subItem;
      })
    }

    return item;
  })
};

export const highlightText = (text, filter) => {
  const index = text.toLowerCase().indexOf(filter.toLowerCase());
  return `${text.substring(0, index)}<mark>${text.substring(index, index + filter.length)}</mark>${text.substring(index + filter.length)}`;
};

export const formatOptionsList = (options = []) => {
  const formatedOptions = [];
  options.forEach((item) => {
    if (item.options) {
      formatedOptions.push({ title: item.label });
      item.options.forEach((sub) => {
        formatedOptions.push(sub);
      })
    } else {
      formatedOptions.push(item);
    }
  });
  return formatedOptions;
}

export const filterOptions = (options, filter, setOptions) => {
  const formatedOptions = formatOptionsList(options);

  if (filter.length > 0) {
    const filtered = formatedOptions.filter((item) => {
      if (item.title) {
        const isMatchedGroup = options.filter(
          (opt) => opt.label === item.title
        )[0].options.filter(
          (opt) => opt.label.toLowerCase().includes(filter.toLowerCase())
        );

        if (isMatchedGroup.length > 0) {
          return item;
        }
      }
      return item.label && item.label.toLowerCase().includes(filter.toLowerCase())
    });
    setOptions(filtered);
    return filtered
  }
  setOptions(formatedOptions);
  return formatedOptions
};
