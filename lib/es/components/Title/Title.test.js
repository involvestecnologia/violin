import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Title } from './Title';
import { theme } from '../../theme';
afterEach(cleanup);
describe('Title', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Title, null, "Lorem ipsum")),
        getByText = _render.getByText;

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = render(React.createElement(Title, {
      size: "h1"
    }, "Title")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Title')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h1 + ";\n    ");
    rerender(React.createElement(Title, {
      size: "h2"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h2 + ";\n    ");
    rerender(React.createElement(Title, {
      size: "h3"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h3 + ";\n    ");
    rerender(React.createElement(Title, {
      size: "h4"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h4 + ";\n    ");
    rerender(React.createElement(Title, {
      size: "h5"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h5 + ";\n    ");
    rerender(React.createElement(Title, {
      size: "h6"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + theme.typography.fontSize.h6 + ";\n    ");
  });
});