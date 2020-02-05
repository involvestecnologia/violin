import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';
afterEach(cleanup);
describe('RadioButton', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(RadioButton, {
      "data-testid": "radio"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('radio')).toBeInTheDocument();
  });
  test('should be hidden radio element', function () {
    var _render2 = render(React.createElement(RadioButton, null)),
        container = _render2.container;

    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });
  test('should have label text', function () {
    var _render3 = render(React.createElement(RadioButton, {
      label: "Lorem ipsum"
    })),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });
  test('should have checked style when is checked', function () {
    var _render4 = render(React.createElement(RadioButton, null)),
        container = _render4.container,
        getByTestId = _render4.getByTestId;

    expect(getByTestId('checked-circle')).not.toBeVisible();
    fireEvent.click(container.firstChild);
    expect(container.querySelector('input')).toBeChecked();
  });
});