/**
 * @param {node} container
 * @param {node} element
 */

const scrollToElement = (container, element) => {
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

export default scrollToElement;
