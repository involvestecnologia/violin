import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
afterEach(cleanup);
var component = React.createElement("button", {
  "data-testid": "trigger",
  type: "button"
}, "Lirem Ipsum");
var content = React.createElement("p", {
  "data-testid": "content"
}, "Lorem ipsaum dolor sit amet");
describe('Dropdown', function () {
  test('should render trigger correctly', function () {
    var _render = render(React.createElement(Dropdown, {
      trigger: component
    }, content)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('shoud render content when trigger was clicked', function () {
    var _render2 = render(React.createElement(Dropdown, {
      trigger: component
    }, content)),
        queryByTestId = _render2.queryByTestId,
        container = _render2.container;

    expect(queryByTestId('content')).not.toBeInTheDocument();
    fireEvent.click(container.firstChild);
    expect(queryByTestId('content')).toBeInTheDocument();
  });
});