function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  margin-top: 6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 4px;\n  font-size: ", ";\n  color: ", ";\n  transform: rotate(180deg);\n  cursor: default;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  &::before {\n    content: ' - ';\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';
export var Wrapper = styled.div(_templateObject());
export var LabelContainer = styled.div(_templateObject2());
export var StyledLabel = styled.label(_templateObject3(), getFromTheme('typography.fontSize.body'), getFromTheme('typography.fontWeight.bold'));
export var LabelText = styled.span(_templateObject4(), ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.900')));
export var HelpLabel = styled.small(_templateObject5(), getFromTheme('typography.fontSize.small'), ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.500')), getFromTheme('typography.fontWeight.regular'));
export var InfoIcon = styled(Icon)(_templateObject6(), rem(20), getFromTheme('palette.black.300'));
export var HelpText = styled.div(_templateObject7(), getFromTheme('typography.fontSize.small'), ifProp('error', getFromTheme('palette.red.700'), getFromTheme('palette.black.500')), ifProp('error', getFromTheme('typography.fontWeight.semiBold'), getFromTheme('typography.fontWeight.regular')));