function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 8px 16px 4px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: 0;\n  border-top: 1px solid ", ";\n  margin: 8px 0; \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: ", ";\n  top: ", "px;\n  left: ", "px;\n  min-width: 160px;\n  width: fit-content;\n  opacity: ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  padding: 8px 0;\n  box-shadow: 0 5px 10px ", ";\n  transition-property: opacity;\n  transition-duration: .1s;\n  transition-timing-function: ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Subtitle } from '../Subtitle';
export var StyledCard = styled.div(_templateObject(), getFromTheme('zIndex.z6'), prop('position.top'), prop('position.left'), ifProp('fadeIn', '1', '0'), getFromTheme('palette.misc.white'), withProp(getFromTheme('palette.black.900'), transparentize(0.8)));
export var Trigger = styled.div(_templateObject2());
export var Divider = styled.div(_templateObject3(), withProp(getFromTheme('palette.black.900'), transparentize(0.9)));
export var StyledTitle = styled(Subtitle)(_templateObject4(), getFromTheme('palette.black.400'));