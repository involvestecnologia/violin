function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  html {\n    font-size: ", ";\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import getFromTheme from '../utils/getFromTheme';
var GlobalStyle = createGlobalStyle(_templateObject(), normalize(), getFromTheme('typography.htmlFontSize'), getFromTheme('typography.fontFamily'), getFromTheme('typography.fontSize.body'), getFromTheme('typography.lineHeight'), getFromTheme('palette.black.900'));
export { GlobalStyle };