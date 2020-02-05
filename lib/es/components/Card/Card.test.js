import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card } from './Card';
afterEach(cleanup);
var contentCard = 'Lorem ipsum';
describe('Card', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Card, null, contentCard)),
        getByText = _render.getByText;

    expect(getByText(contentCard)).toBeInTheDocument();
  });
  test('should render actions elements', function () {
    var _render2 = render(React.createElement(Card, {
      actions: React.createElement(React.Fragment, null, React.createElement("span", {
        key: 1
      }, "action 1"), React.createElement("span", {
        key: 2
      }, "action 2"))
    }, contentCard)),
        getByText = _render2.getByText;

    expect(getByText('action 1')).toBeInTheDocument();
    expect(getByText('action 2')).toBeInTheDocument();
  });
  test('should render title and subTitle', function () {
    var title = 'Title';
    var subTitle = 'Sub Title';

    var _render3 = render(React.createElement(Card, {
      title: title,
      subTitle: subTitle
    }, contentCard)),
        getByText = _render3.getByText;

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subTitle)).toBeInTheDocument();
  });
  test('should have block style', function () {
    var _render4 = render(React.createElement(Card, null, contentCard)),
        getByText = _render4.getByText;

    expect(getByText(contentCard)).toHaveStyle("\n      display: block;\n    ");
  });
});