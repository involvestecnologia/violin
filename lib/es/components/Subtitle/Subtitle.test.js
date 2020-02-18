import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Subtitle } from './Subtitle';
import { theme } from '../../theme';
afterEach(cleanup);
describe('Subtitle', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Subtitle, null, "Subtitle")),
        getByText = _render.getByText;

    expect(getByText('Subtitle')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = render(React.createElement(Subtitle, null, "Subtitle")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.large + ";\n    ");
    rerender(React.createElement(Subtitle, {
      small: true
    }, "Subtitle"));
    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.body + ";\n    ");
    rerender(React.createElement(Subtitle, {
      overline: true
    }, "Subtitle"));
    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.xsmall + ";\n    ");
  });
});