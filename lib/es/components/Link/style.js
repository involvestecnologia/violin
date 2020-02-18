function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  text-decoration: ", ";\n  cursor: pointer;\n  transition: ", ";\n  color: ", ";\n\n  &:hover {\n    text-decoration: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';
export var StyledLink = styled.a(_templateObject(), getFromTheme('typography.fontWeight.semiBold'), ifProp('invert', 'underline', 'none'), getFromTheme('common.transition'), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), ifProp('invert', 'none', 'underline'));