function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import { Modal } from './Modal';
import { Button } from '../Button';
afterEach(cleanup);
var modalTitle = 'Modal Title';
describe('Modal', function () {
  test('should render correctly', function () {
    var _render = render(React.createElement(Modal, {
      title: modalTitle,
      open: true
    })),
        getByText = _render.getByText;

    expect(getByText(modalTitle)).toBeInTheDocument();
  });
  test('should have visibility: visible when open attribute is true',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render2, getByTestId;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render2 = render(React.createElement(Modal, {
              title: modalTitle,
              open: true
            })), getByTestId = _render2.getByTestId;
            _context.next = 3;
            return wait(function () {
              return expect(getByTestId('modal-wrapper')).toBeVisible();
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('should call onClose callback when backdrop is clicked', function () {
    var onClose = jest.fn();

    var _render3 = render(React.createElement(Modal, {
      title: modalTitle,
      onClose: onClose,
      open: true
    })),
        getByTestId = _render3.getByTestId;

    getByTestId('modal-backdrop').click();
    expect(onClose).toHaveBeenCalled();
  });
  test('should call onClose callback when close button is clicked', function () {
    var onClose = jest.fn();

    var _render4 = render(React.createElement(Modal, {
      title: modalTitle,
      onClose: onClose,
      open: true
    })),
        getByTestId = _render4.getByTestId;

    getByTestId('modal-close-button').click();
    expect(onClose).toHaveBeenCalled();
  });
  test('should render actions',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var actions, _render5, getByText;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            actions = [React.createElement(Button, null, "action1"), React.createElement(Button, null, "action2"), React.createElement(Button, null, "action3")];
            _render5 = render(React.createElement(Modal, {
              title: modalTitle,
              actions: actions,
              open: true
            })), getByText = _render5.getByText;
            _context2.next = 4;
            return wait(function () {
              expect(getByText('action1')).toBeVisible();
              expect(getByText('action2')).toBeVisible();
              expect(getByText('action3')).toBeVisible();
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('should disable backdrop when disableBackdropClick is true', function () {
    var _render6 = render(React.createElement(Modal, {
      disableBackdropClick: true,
      open: true
    })),
        getByTestId = _render6.getByTestId;

    expect(getByTestId('modal-backdrop')).toHaveStyle("\n      pointer-events: none;\n    ");
  });
  test('should disable esc keydown when disableEscapeKeyDown is true', function () {
    var onClose = jest.fn();

    var _render7 = render(React.createElement(Modal, {
      open: true,
      onClose: onClose,
      disableEscapeKeyDown: true
    })),
        container = _render7.container;

    fireEvent.keyDown(container.parentElement, {
      key: 'Escape',
      code: 27
    });
    expect(onClose).not.toHaveBeenCalled();
  });
  test('should have focus on modal when it is open', function () {
    var _render8 = render(React.createElement(Modal, {
      open: true
    })),
        getByTestId = _render8.getByTestId;

    expect(getByTestId('modal-card')).toEqual(document.activeElement);
  });
});