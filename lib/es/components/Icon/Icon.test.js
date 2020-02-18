import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Icon } from './Icon';
afterEach(cleanup);
describe('Icon', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Icon, {
      "data-testid": "icon",
      icon: "favorite"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('should render icon correctly', function () {
    var _render2 = render(React.createElement(Icon, {
      "data-testid": "icon",
      icon: "favorite"
    })),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('icon')).toHaveTextContent('favorite');
  });
});