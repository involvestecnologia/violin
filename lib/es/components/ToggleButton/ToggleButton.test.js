import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';
afterEach(cleanup);
describe('ToggleButton', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render.getByTestId;

    expect(getByTestId('wrapper')).toBeInTheDocument();
    expect(getByTestId('hidden-input')).toBeInTheDocument();
    expect(getByTestId('styled-button')).toBeInTheDocument();
  });
  test('should be hidden input', function () {
    var _render2 = render(React.createElement(ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeVisible();
  });
  test('should check hidden input when clicked', function () {
    var _render3 = render(React.createElement(ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render3.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
  });
  test('should check and uncheck hidden input when clicked', function () {
    var _render4 = render(React.createElement(ToggleButton, {
      name: "option",
      multiple: true
    }, "Option 1")),
        getByTestId = _render4.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).not.toBeChecked();
  });
});