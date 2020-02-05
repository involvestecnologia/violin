import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Tooltip } from './Tooltip';
import { TextField } from '../TextField';
afterEach(cleanup);
jest.useFakeTimers();
describe('Tooltip', function () {
  test('children should render correctly', function () {
    var _render = render(React.createElement(Tooltip, {
      content: "Lorem ipsum"
    }, React.createElement("span", null, "Trigger"))),
        getByTestId = _render.getByTestId;

    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('should render when mouse enter', function () {
    var _render2 = render(React.createElement(Tooltip, {
      content: "Lorem ipsum"
    }, React.createElement("span", null, "Trigger"))),
        getByTestId = _render2.getByTestId;

    act(function () {
      fireEvent.mouseOver(getByTestId('trigger'));
      jest.advanceTimersByTime(100);
    });
    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });
  test('should render when trigger has focus', function () {
    var _render3 = render(React.createElement(Tooltip, {
      content: "Lorem ipsum"
    }, React.createElement(TextField, null))),
        getByTestId = _render3.getByTestId;

    act(function () {
      fireEvent.focus(getByTestId('trigger'));
      jest.advanceTimersByTime(100);
    });
    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });
});