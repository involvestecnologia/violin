import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Text } from './Text';
import { theme } from '../../theme';
afterEach(cleanup);
describe('Text', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Text, null, "Lorem ipsum")),
        getByText = _render.getByText;

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
  test('shoud have correctly style', function () {
    var _render2 = render(React.createElement(Text, null, "Lorem ipsum")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.body + ";\n    ");
    rerender(React.createElement(Text, {
      small: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.small + ";\n    ");
    rerender(React.createElement(Text, {
      caption: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.small + ";\n    ");
    rerender(React.createElement(Text, {
      disabled: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      opacity: 0.25;\n    ");
    rerender(React.createElement(Text, {
      error: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      color: " + theme.palette.red[700] + ";\n    ");
  });
  test('shoud have bold style', function () {
    var _render3 = render(React.createElement(Text, {
      bold: true
    }, "Lorem ipsum")),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-weight: " + theme.typography.fontWeight.bold + ";\n    ");
  });
  test('shoud have italic style', function () {
    var _render4 = render(React.createElement(Text, {
      italic: true
    }, "Lorem ipsum")),
        getByText = _render4.getByText;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-style: italic;\n    ");
  });
});