import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Heading } from './Heading';
import { theme } from '../../theme';
afterEach(cleanup);
describe('Heading', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Heading, null, "Lorem ipsum")),
        getByText = _render.getByText;

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = render(React.createElement(Heading, {
      size: "h1"
    }, "Heading")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Heading')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h1 + ";\n    ");
    rerender(React.createElement(Heading, {
      size: "h2"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h2 + ";\n    ");
    rerender(React.createElement(Heading, {
      size: "h3"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h3 + ";\n    ");
    rerender(React.createElement(Heading, {
      size: "h4"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h4 + ";\n    ");
    rerender(React.createElement(Heading, {
      size: "h5"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h5 + ";\n    ");
    rerender(React.createElement(Heading, {
      size: "h6"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h6 + ";\n    ");
  });
});