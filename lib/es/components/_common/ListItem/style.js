function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: 10px;\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 300px;\n  padding: 12px 16px;\n  font-size: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: ", ";\n  opacity: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { withProp, ifProp } from 'styled-tools';
import { Icon } from '../../Icon';
import getFromTheme from '../../../utils/getFromTheme';
export var StyledItem = styled.div(_templateObject(), getFromTheme('typography.fontSize.body'), getFromTheme('palette.black.900'), ifProp('disabled', 'not-allowed', 'pointer'), ifProp('disabled', '0.2', '1'), ifProp('disabled', 'none', withProp(getFromTheme('palette.black.900'), transparentize(0.92))));
export var StyledIcon = styled(Icon)(_templateObject2(), rem(24), getFromTheme('palette.black.600'));