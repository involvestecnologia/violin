import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormGroup } from './FormGroup';
afterEach(cleanup);
describe('FormGroup', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(FormGroup, null)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('wrapper')).toBeInTheDocument();
  });
  test('should display label if has prop', function () {
    var _render2 = render(React.createElement(FormGroup, null)),
        queryByTestId = _render2.queryByTestId,
        getByTestId = _render2.getByTestId,
        rerender = _render2.rerender;

    expect(queryByTestId('label-text')).toBeNull();
    rerender(React.createElement(FormGroup, {
      label: "Lorem ipsum"
    }));
    expect(getByTestId('label-text')).toBeInTheDocument();
    expect(getByTestId('label-text')).toHaveTextContent('Lorem ipsum');
  });
  test('should display help label text if has prop', function () {
    var _render3 = render(React.createElement(FormGroup, null)),
        queryByTestId = _render3.queryByTestId,
        getByTestId = _render3.getByTestId,
        rerender = _render3.rerender;

    expect(queryByTestId('help-label')).toBeNull();
    rerender(React.createElement(FormGroup, {
      helpLabel: "Lorem ipsum"
    }));
    expect(getByTestId('help-label')).toBeInTheDocument();
    expect(getByTestId('help-label')).toHaveTextContent('Lorem ipsum');
  });
  test('should display info icon with tooltip', function () {
    var _render4 = render(React.createElement(FormGroup, null)),
        queryByTestId = _render4.queryByTestId,
        getByTestId = _render4.getByTestId,
        rerender = _render4.rerender;

    expect(queryByTestId('trigger')).toBeNull();
    rerender(React.createElement(FormGroup, {
      tooltip: "Lorem ipsum"
    }));
    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('should display content children', function () {
    var _render5 = render(React.createElement(FormGroup, null, "This is a content")),
        getByText = _render5.getByText;

    expect(getByText('This is a content')).toBeInTheDocument();
  });
  test('should display help text if has prop', function () {
    var _render6 = render(React.createElement(FormGroup, null)),
        queryByTestId = _render6.queryByTestId,
        getByTestId = _render6.getByTestId,
        rerender = _render6.rerender;

    expect(queryByTestId('help-text')).toBeNull();
    rerender(React.createElement(FormGroup, {
      helpText: "Lorem ipsum"
    }));
    expect(getByTestId('help-text')).toBeInTheDocument();
    expect(getByTestId('help-text')).toHaveTextContent('Lorem ipsum');
  });
});