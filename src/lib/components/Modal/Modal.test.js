import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { Modal } from './Modal';
import { Button } from '../Button'
import { ModalBackdrop } from './style'

afterEach(cleanup);
const modalTitle = 'Modal Title';

describe('Modal', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Modal title={modalTitle} />);
    expect(getByText(modalTitle)).toBeInTheDocument();
  });

  test('should have visibility: visible when open attribute is true', () => {
    const { getByText } = render(<Modal title={modalTitle} open />);
    expect(getByText(modalTitle)).toBeVisible();
  });

  test('should call onClose callback when backdrop is clicked', () => {
    const onClose = jest.fn();
    const wrapper = mount(<Modal title={modalTitle} onClose={onClose} open />);
    wrapper.find(ModalBackdrop).simulate('click');
    expect(onClose).toHaveBeenCalled()
  });

  test('should call onClose callback when close button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = mount(<Modal title={modalTitle} onClose={onClose} open />);
    wrapper.find(Button).simulate('click');
    expect(onClose).toHaveBeenCalled()
  });

  test('should render actions', () => {
    const actions = [
      <Button>action1</Button>,
      <Button>action2</Button>,
      <Button>action3</Button>
    ];

    const { getByText } = render(<Modal title={modalTitle} actions={actions} open />);

    expect(getByText('action1')).toBeVisible();
    expect(getByText('action2')).toBeVisible();
    expect(getByText('action3')).toBeVisible();
  })
});
