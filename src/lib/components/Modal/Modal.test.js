import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import { Modal } from './Modal';
import { Button } from '../Button'

afterEach(cleanup);
const modalTitle = 'Modal Title';

describe('Modal', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Modal title={modalTitle} open />);
    expect(getByText(modalTitle)).toBeInTheDocument();
  });

  test('should have visibility: visible when open attribute is true', async () => {
    const { getByTestId } = render(<Modal title={modalTitle} open />);
    await wait(() => expect(getByTestId('modal-wrapper')).toBeVisible());
  });

  test('should call onClose callback when backdrop is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal title={modalTitle} onClose={onClose} open />);
    getByTestId('modal-backdrop').click()
    expect(onClose).toHaveBeenCalled()
  });

  test('should call onClose callback when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal title={modalTitle} onClose={onClose} open />);
    getByTestId('modal-close-button').click()
    expect(onClose).toHaveBeenCalled()
  });

  test('should render actions', async () => {
    const actions = [
      <Button>action1</Button>,
      <Button>action2</Button>,
      <Button>action3</Button>
    ];

    const { getByText } = render(<Modal title={modalTitle} actions={actions} open />);

    await wait(() => {
      expect(getByText('action1')).toBeVisible();
      expect(getByText('action2')).toBeVisible();
      expect(getByText('action3')).toBeVisible();
    })
  })

  test('should disable backdrop when disableBackdropClick is true', () => {
    const { getByTestId } = render(<Modal disableBackdropClick open />);
    expect(getByTestId('modal-backdrop')).toHaveStyle(`
      pointer-events: none;
    `);
  })

  test('should disable esc keydown when disableEscapeKeyDown is true', () => {
    const onClose = jest.fn();
    const { container } = render(<Modal open onClose={onClose} disableEscapeKeyDown />);
    fireEvent.keyDown(container.parentElement, { key: 'Escape', code: 27 })
    expect(onClose).not.toHaveBeenCalled()
  })

  test('should have focus on modal when it is open', () => {
    const { getByTestId } = render(<Modal open />);
    expect(getByTestId('modal-card')).toEqual(document.activeElement)
  })

  test('should render passed styles', () => {
    const { getByTestId } = render(<Modal open style={{ width: '500px' }} />);
    expect(getByTestId('modal-card')).toHaveStyle(`
      width: 500px;
    `);
  })
});
