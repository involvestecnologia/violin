"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DemoDropdown = function DemoDropdown() {
  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return _react["default"].createElement(_index.Dropdown, {
    preventClose: true,
    open: isOpen,
    trigger: _react["default"].createElement(_index.Button, {
      primary: true,
      dropdownIcon: true,
      onClick: function onClick() {
        return setIsOpen(true);
      }
    }, "Click me!")
  }, _react["default"].createElement("div", {
    style: {
      padding: 10
    }
  }, _react["default"].createElement(_index.Checkbox, {
    label: "Lorem ipsum dolor sit",
    style: {
      padding: '5px 0',
      display: 'flex'
    }
  }), _react["default"].createElement(_index.Checkbox, {
    label: "Duis aute irure dolor in reprehenderit",
    style: {
      padding: '5px 0',
      display: 'flex'
    }
  }), _react["default"].createElement(_index.Checkbox, {
    label: "Excepteur sint occaecat",
    style: {
      padding: '5px 0',
      marginBottom: 10,
      display: 'flex'
    }
  }), _react["default"].createElement(_index.Button, {
    block: true,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Apply")));
};

var _default = DemoDropdown;
exports["default"] = _default;