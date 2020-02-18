"use strict";

exports.__esModule = true;
exports["default"] = activeElement;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Return the actively focused element safely.
 *
 * @param doc the document to checl
 */
function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument["default"])();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}