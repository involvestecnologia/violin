function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked ~ ", " {\n    ", " {\n      stroke: ", ";\n    }\n    ", " {\n      opacity: 1;\n    }\n\n    &:hover {\n      ", " {\n        stroke: ", ";\n      }\n      ", " {\n        fill: ", ";\n      }\n    }\n  }\n\n  &:focus {\n    ~ ", " {\n      ", " {\n        stroke: ", ";\n      }\n    }\n\n    &:checked {\n      ~ ", " {\n        ", " {\n          stroke: ", ";\n        }\n        ", " {\n          fill: ", ";\n        }\n      }\n    } \n  }\n\n  &:disabled {\n    ~ ", " {\n      cursor: not-allowed;\n\n      ", " {\n        stroke: ", ";\n        cursor: not-allowed;\n      }\n    }\n\n    ~ ", " {\n      opacity: 0.3;\n      cursor: not-allowed;\n    }\n\n    &:checked {\n      ~ ", " {\n        ", " {\n          stroke: ", ";\n        }\n        ", " {\n          fill: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: 6px;\n  font-size: ", ";\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  fill: ", ";\n  opacity: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  fill: none;\n  stroke-width: 2px;\n  stroke: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
export var Wrapper = styled.label(_templateObject());
export var Circle = styled.circle(_templateObject2(), getFromTheme('palette.black.400'));
export var CircleCheck = styled.circle(_templateObject3(), getFromTheme('palette.primary.500'));
export var Svg = styled.svg(_templateObject4(), Circle, getFromTheme('palette.primary.500'));
export var Label = styled.span(_templateObject5(), getFromTheme('typography.fontSize.body'));
export var InputStyled = styled.input(_templateObject6(), Svg, Circle, getFromTheme('palette.primary.500'), CircleCheck, Circle, getFromTheme('palette.primary.700'), CircleCheck, getFromTheme('palette.primary.700'), Svg, Circle, getFromTheme('palette.primary.500'), Svg, Circle, getFromTheme('palette.primary.700'), CircleCheck, getFromTheme('palette.primary.700'), Svg, Circle, withProp(getFromTheme('palette.misc.black'), transparentize(0.85)), Label, Svg, Circle, withProp(getFromTheme('palette.misc.black'), transparentize(0.85)), CircleCheck, withProp(getFromTheme('palette.misc.black'), transparentize(0.85)));