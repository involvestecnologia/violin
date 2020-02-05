function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  padding: 0 ", ";\n  outline: none;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 4px;\n  transition: ", ";\n  height: ", ";\n  font-size: ", ";\n  display: ", ";\n  width: ", ";\n  box-shadow: 0 0 0 transparent;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > i {\n    font-size: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: transparent;\n  border: none;\n  ", "\n  width: ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border: none;\n    box-shadow: 0 0 0 transparent;\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: transparent;\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: transparent;\n    box-shadow: 0 0 0 2px ", ",\n                inset 0 0 0 1px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: none;\n    box-shadow: 0 0 0 transparent;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: none;\n    box-shadow: 0 0 0 transparent;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { rem, transparentize } from 'polished';
import { Icon } from '../Icon';
import getFromTheme from '../../utils/getFromTheme';
var primaryStyle = css(_templateObject(), ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.misc.white')), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.400')), ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.misc.white')), ifProp('invert', withProp(getFromTheme('palette.misc.white'), transparentize(0.5)), withProp(getFromTheme('palette.primary.400'), transparentize(0.5))), ifProp('invert', withProp(getFromTheme('palette.misc.white'), transparentize(0.3)), getFromTheme('palette.primary.600')), ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.primary.600')), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.400')), transparentize(0.7)));
var dangerStyle = css(_templateObject2(), getFromTheme('palette.misc.white'), getFromTheme('palette.red.600'), getFromTheme('palette.red.600'), getFromTheme('palette.red.500'), getFromTheme('palette.misc.white'), withProp(getFromTheme('palette.red.500'), transparentize(0.5)), getFromTheme('palette.red.700'), getFromTheme('palette.red.700'), withProp(getFromTheme('palette.red.500'), transparentize(0.7)));
var defaultStyle = css(_templateObject3(), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), transparentize(0.5)), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.92)), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.9)), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.75)));
var secondaryStyle = css(_templateObject4(), ifProp('iconOnly', ifProp('invert', getFromTheme('palette.misc.white'), withProp(getFromTheme('palette.black.900'), transparentize(0.3))), ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))), function (props) {
  return props.iconOnly && 'border-radius: 50%;';
}, ifProp('iconOnly', ifProp('small', '30px', ifProp('large', '52px', '40px')), 'auto'), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.92)), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), ifProp('invert', transparentize(0.80), transparentize(0.85))), withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.75)));
export var StyledButton = styled.button(_templateObject5(), ifProp('small', '10px', ifProp('large', '16px', '12px')), getFromTheme('typography.fontFamily'), getFromTheme('typography.fontWeight.semiBold'), getFromTheme('common.transition'), ifProp('small', '30px', ifProp('large', '52px', '40px')), ifProp('small', rem(13), ifProp('large', rem(18), rem(14))), ifProp('block', 'flex', 'inline-flex'), ifProp('block', '100%', ifProp('iconOnly', ifProp('small', '30px', ifProp('large', '52px', '40px')), 'auto')), function (props) {
  return !props.primary && !props.secondary && !props.danger && defaultStyle;
}, function (props) {
  return props.primary && primaryStyle;
}, function (props) {
  return props.danger && dangerStyle;
}, function (props) {
  return props.secondary && secondaryStyle;
}, function (props) {
  return props.iconOnly && 'padding: 0;';
}, ifProp('small', rem(20), ifProp('large', rem(32), rem(26))));
export var StyledIcon = styled(Icon)(_templateObject6(), ifProp('hasChildren', '5px', '0'));