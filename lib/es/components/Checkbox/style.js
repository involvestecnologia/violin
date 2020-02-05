function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked ~ ", ",\n  &:indeterminate ~ ", " {\n    ", " {\n      stroke: ", ";\n      fill: ", ";\n    }\n\n    &:hover {\n      ", " {\n        stroke: ", ";\n        fill: ", ";\n      }\n    }\n  }\n\n  &:focus ~ ", " {\n    ", " {\n      stroke: ", ";\n    }\n  }\n\n  &:focus:checked ~ ", ",\n  &:focus:indeterminate ~ ", " {\n    ", " {\n      stroke: ", ";\n      fill: ", ";\n    }\n  }\n\n  &:checked ~ ", " {\n    > ", " {\n      opacity: 1;\n    }\n    > ", " {\n      opacity: 0;\n    }\n  }\n\n  &:indeterminate ~ ", " {\n    > ", " {\n      opacity: 0;\n    }\n    > ", " {\n      opacity: 1;\n    }\n  }\n\n  &:disabled ~ ", " > ", ",\n  &:indeterminate ~ ", " > ", " {\n    stroke: ", ";\n  }\n\n  &:disabled:checked ~ ", " > ", ",\n  &:disabled:indeterminate ~ ", " > ", " {\n    stroke: ", ";\n    fill: ", ";\n  }\n  \n  &:disabled ~ ", " {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  &:disabled ~ ", " {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: 6px;\n  font-size: ", ";\n  cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  stroke-width: 2px;\n  stroke: white;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  opacity: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 18px;\n  height: 18px;\n\n  &:hover {\n    ", " {\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke-width: 2px;\n  stroke: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { withProp, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
export var Wrapper = styled.label(_templateObject(), ifProp('disabled', 'not-allowed', 'pointer'));
export var Rect = styled.rect(_templateObject2(), getFromTheme('palette.black.400'));
export var Svg = styled.svg(_templateObject3(), Rect, getFromTheme('palette.primary.500'));
var iconCheck = css(_templateObject4());
export var CheckedIcon = styled.path(_templateObject5(), iconCheck);
export var IndeterminateIcon = styled.path(_templateObject6(), iconCheck);
export var Label = styled.span(_templateObject7(), getFromTheme('typography.fontSize.body'));
export var InputStyled = styled.input(_templateObject8(), Svg, Svg, Rect, getFromTheme('palette.primary.500'), getFromTheme('palette.primary.500'), Rect, getFromTheme('palette.primary.700'), getFromTheme('palette.primary.700'), Svg, Rect, getFromTheme('palette.primary.500'), Svg, Svg, Rect, getFromTheme('palette.primary.700'), getFromTheme('palette.primary.700'), Svg, CheckedIcon, IndeterminateIcon, Svg, CheckedIcon, IndeterminateIcon, Svg, Rect, Svg, Rect, withProp(getFromTheme('palette.misc.black'), transparentize(0.85)), Svg, Rect, Svg, Rect, withProp(getFromTheme('palette.misc.black'), transparentize(0.85)), withProp(getFromTheme('palette.misc.black'), transparentize(0.85)), Label, Svg);