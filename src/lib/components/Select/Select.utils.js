/* eslint-disable no-plusplus */
export const setHighlightNavigation = (arr, direction, current, callback) => {
  const down = direction === 'DOWN';
  const up = direction === 'UP';

  for (
    let i = current;
    down ? (i < arr.length) : (i >= 0);
    down ? (i++) : (i--)
  ) {
    // down key
    if (down && i >= arr.length - 1) {
      setHighlightNavigation(arr, 'DOWN', -1, callback);
      break;
    }
    if (down && arr[i + 1].value) {
      callback(i + 1);
      break;
    }
    // up key
    if (up && i <= 0) {
      setHighlightNavigation(arr, 'UP', arr.length, callback);
      break;
    }
    if (up && arr[i - 1].value) {
      callback(i - 1);
      break;
    }
  }
};
