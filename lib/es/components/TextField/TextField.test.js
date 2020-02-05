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
  test('should render label', function () {
    var _render3 = render(React.createElement(TextField, {
      label: "Label"
    })),
        getByText = _render3.getByText;

    expect(getByText('Label')).toBeInTheDocument();
  });
  test('should render label help', function () {
    var _render4 = render(React.createElement(TextField, {
      label: "Label",
      helpLabel: "required"
    })),
        getByText = _render4.getByText;

    expect(getByText('required')).toBeInTheDocument();
  });
  test('should render label help', function () {
    var _render5 = render(React.createElement(TextField, {
      label: "Label",
      helpLabel: "required",
      helpText: "Help text"
    })),
        getByText = _render5.getByText;

    expect(getByText('Help text')).toBeInTheDocument();
  });
  test('should be disabled', function () {
    var _render6 = render(React.createElement(TextField, {
      placeholder: placeholder,
      disabled: true
    })),
        getByPlaceholderText = _render6.getByPlaceholderText;

    expect(getByPlaceholderText(placeholder)).toBeDisabled();
  });
  test('should have size style correctly', function () {
    var _render7 = render(React.createElement(TextField, {
      placeholder: placeholder,
      small: true
    })),
        getByPlaceholderText = _render7.getByPlaceholderText,
        rerender = _render7.rerender;

    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 30px;\n    ");
    rerender(React.createElement(TextField, {
      placeholder: placeholder,
      large: true
    }));
    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 52px;\n    ");
  });
  test('should render info icon of tooltip', function () {
    var _render8 = render(React.createElement(TextField, {
      tooltip: "Lorem ipsum"
    })),
        getByTestId = _render8.getByTestId;

    expect(getByTestId('trigger')).toBeInTheDocument();
  });
});