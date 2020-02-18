import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, CardTitles, CardTitle, CardSubTitle, CardActions, CardContent } from './style';
export var Card = function Card(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      actions = _ref.actions;
  return React.createElement(CardWrapper, null, (title || subTitle || actions) && React.createElement(CardHeader, null, (title || subTitle) && React.createElement(CardTitles, null, title && React.createElement(CardTitle, {
    title: title,
    size: "h6"
  }, title), subTitle && React.createElement(CardSubTitle, {
    title: subTitle,
    overline: true
  }, subTitle)), actions && React.createElement(CardActions, null, actions)), React.createElement(CardContent, null, children));
};
Card.propTypes = {
  /** Apply card title */
  title: PropTypes.string,

  /** Apply card subtitle */
  subTitle: PropTypes.string,

  /** Apply card actions, like a button or a set of buttons */
  actions: PropTypes.element
};
Card.defaultProps = {
  title: null,
  subTitle: null,
  actions: null
};