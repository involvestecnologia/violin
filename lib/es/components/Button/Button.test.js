import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';
afterEach(cleanup);
var contentButton = 'Lorem ipsum';
describe('Button', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Button, null, contentButton)),
        getByText = _render.getByText;

    expect(getByText(contentButton)).toBeInTheDocument();
  });
  test('should render icon element', function () {
    var _render2 = render(React.createElement(Button, {
      icon: "games"
    })),
        getByText = _render2.getByText;

    var iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  });
  test('should have block style', function () {
    var _render3 = render(React.createElement(Button, null, contentButton)),
        getByText = _render3.getByText,
        rerender = _render3.rerender;

    expect(getByText(contentButton)).toHaveStyle("\n      width: auto;\n    ");
    rerender(React.createElement(Button, {
      block: true
    }, contentButton));
    expect(getByText(contentButton)).toHaveStyle("\n      width: 100%;\n    ");
  });
});