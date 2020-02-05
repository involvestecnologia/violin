import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Subheading } from './Subheading';
import { theme } from '../../theme';
afterEach(cleanup);
describe('Subheading', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Subheading, null, "Subheading")),
        getByText = _render.getByText;

    expect(getByText('Subheading')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = render(React.createElement(Subheading, null, "Subheading")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.large + ";\n    ");
    rerender(React.createElement(Subheading, {
      small: true
    }, "Subheading"));
    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.body + ";\n    ");
    rerender(React.createElement(Subheading, {
      overline: true
    }, "Subheading"));
    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.xsmall + ";\n    ");
  });
});