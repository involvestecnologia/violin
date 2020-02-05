function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: 'Material Icons Round', sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n  font-size: inherit;\n  cursor: ", ";\n  color: inherit;\n  transition: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';
export var WrapperIcon = styled.i(_templateObject(), ifProp('onClick', 'pointer'), getFromTheme('common.transition'));