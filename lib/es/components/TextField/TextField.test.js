import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextField } from './TextField';
afterEach(cleanup);
var placeholder = 'Lorem ipsum';
describe('TextField', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(TextField, {
      placeholder: placeholder
    })),
        getByPlaceholderText = _render.getByPlaceholderText;

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  test('should have correctly type', function () {
    var _render2 = render(React.createElement(TextField, {
      type: "number",
      placeholder: placeholder
    })),
        getByPlaceholderText = _render2.getByPlaceholderText,
        rerender = _render2.rerender;

    expect(getByPlaceholderText(placeholder).type).toBe('number');
    rerender(React.createElement(TextField, {
      type: "email",
      placeholder: placeholder
    }));
    expect(getByPlaceholderText(placeholder).type).toBe('email');
  });
  test('should be disabled', function () {
    var _render3 = render(React.createElement(TextField, {
      placeholder: placeholder,
      disabled: true
    })),
        getByPlaceholderText = _render3.getByPlaceholderText;

    expect(getByPlaceholderText(placeholder)).toBeDisabled();
  });
  test('should have size style correctly', function () {
    var _render4 = render(React.createElement(TextField, {
      placeholder: placeholder,
      small: true
    })),
        getByPlaceholderText = _render4.getByPlaceholderText,
        rerender = _render4.rerender;

    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 30px;\n    ");
    rerender(React.createElement(TextField, {
      placeholder: placeholder,
      large: true
    }));
    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 52px;\n    ");
  });
});