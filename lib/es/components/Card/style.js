function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 16px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-column-gap: 2px;\n  grid-template-rows: 100%;\n  grid-auto-flow: column;\n  padding: 8px;\n"]);

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
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  color: ", ";\n  font-weight: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 16px 16px 0 16px;\n  min-width: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-auto-columns: auto;\n  grid-template-columns: auto max-content;\n  align-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 8px rgba(31, 14, 61, 0.05);\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';
export var CardWrapper = styled.div(_templateObject(), getFromTheme('palette.misc.white'));
export var CardHeader = styled.header(_templateObject2());
export var CardTitles = styled.div(_templateObject3());
var ellipsisStyle = css(_templateObject4());
export var CardTitle = styled(Heading)(_templateObject5(), ellipsisStyle, getFromTheme('palette.black.500'), getFromTheme('typography.fontWeight.semiBold'));
export var CardSubTitle = styled(Subheading)(_templateObject6(), ellipsisStyle);
export var CardActions = styled.div(_templateObject7());
export var CardContent = styled.div(_templateObject8());