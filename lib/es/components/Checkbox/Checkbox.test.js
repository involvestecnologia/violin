import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';
afterEach(cleanup);
describe('Checkbox', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Checkbox, {
      "data-testid": "checkbox"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('checkbox')).toBeInTheDocument();
  });
  test('should be hidden checkbox element', function () {
    var _render2 = render(React.createElement(Checkbox, null)),
        container = _render2.container;

    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });
  test('should have label text', function () {
    var _render3 = render(React.createElement(Checkbox, {
      label: "Lorem ipsum"
    })),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });
  test('should have checked style when is checked', function () {
    var _render4 = render(React.createElement(Checkbox, null)),
        container = _render4.container,
        getByTestId = _render4.getByTestId;

    expect(getByTestId('checked-icon')).not.toBeVisible();
    fireEvent.click(container.firstChild);
    expect(container.firstChild.querySelector('input')).toBeChecked();
    expect(getByTestId('checked-icon')).toBeVisible();
  });
});