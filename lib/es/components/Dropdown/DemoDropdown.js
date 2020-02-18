import React, { useState } from 'react';
import { Button, Dropdown, Checkbox } from '../index';

var DemoDropdown = function DemoDropdown() {
  var _useState = useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return React.createElement(Dropdown, {
    preventClose: true,
    open: isOpen,
    trigger: React.createElement(Button, {
      primary: true,
      dropdownIcon: true,
      onClick: function onClick() {
        return setIsOpen(true);
      }
    }, "Click me!")
  }, React.createElement("div", {
    style: {
      padding: 10
    }
  }, React.createElement(Checkbox, {
    label: "Lorem ipsum dolor sit",
    style: {
      padding: '5px 0',
      display: 'flex'
    }
  }), React.createElement(Checkbox, {
    label: "Duis aute irure dolor in reprehenderit",
    style: {
      padding: '5px 0',
      display: 'flex'
    }
  }), React.createElement(Checkbox, {
    label: "Excepteur sint occaecat",
    style: {
      padding: '5px 0',
      marginBottom: 10,
      display: 'flex'
    }
  }), React.createElement(Button, {
    block: true,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Apply")));
};

export default DemoDropdown;