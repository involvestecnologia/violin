import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Link } from './Link';
afterEach(cleanup);
var contentButton = 'Click';
describe('Link', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Link, {
      href: "http://involves.com"
    }, contentButton)),
        getByText = _render.getByText;

    expect(getByText(contentButton)).toBeInTheDocument();
  });
  test('should have style correctly', function () {
    var _render2 = render(React.createElement(Link, {
      href: "http://involves.com"
    }, contentButton)),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText(contentButton)).toHaveStyle("\n      text-decoration: none;\n    ");
    rerender(React.createElement(Link, {
      href: "http://involves.com",
      invert: true
    }, contentButton));
    expect(getByText(contentButton)).toHaveStyle("\n      text-decoration: underline;\n    ");
  });
});