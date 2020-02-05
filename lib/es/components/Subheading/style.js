function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  color: ", ";\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';
var overlineStyle = css(_templateObject(), getFromTheme('palette.black.500'), getFromTheme('typography.fontSize.xsmall'));
export var StyledHeading = styled.h2(_templateObject2(), ifProp('small', getFromTheme('typography.fontSize.body'), getFromTheme('typography.fontSize.large')), getFromTheme('typography.lineHeight'), getFromTheme('typography.fontWeight.bold'), getFromTheme('palette.black.900'), function (props) {
  return props.overline && overlineStyle;
});