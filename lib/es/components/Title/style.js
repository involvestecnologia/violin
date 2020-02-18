function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
export var StyledTitle = styled.h2(_templateObject(), function (_ref) {
  var size = _ref.size;
  return getFromTheme("typography.fontSize." + size);
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'h1' || size === 'h2' || size === 'h3' ? '1.2' : getFromTheme('typography.lineHeight');
}, getFromTheme('typography.fontWeight.bold'), getFromTheme('palette.black.900'));