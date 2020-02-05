function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  opacity: 0.25;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';
var captionStyle = css(_templateObject(), getFromTheme('palette.black.400'), getFromTheme('typography.fontSize.small'));
var disabledStyle = css(_templateObject2());
var errorStyle = css(_templateObject3(), getFromTheme('palette.red.700'), getFromTheme('typography.fontSize.small'), getFromTheme('typography.fontWeight.bold'));
var smallStyle = css(_templateObject4(), getFromTheme('typography.fontSize.small'));
export var StyledText = styled.p(_templateObject5(), getFromTheme('typography.fontSize.body'), ifProp('bold', getFromTheme('typography.fontWeight.bold')), ifProp('italic', 'italic'), function (props) {
  return props.caption && captionStyle;
}, function (props) {
  return props.error && errorStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.small && smallStyle;
});