import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import { Notification } from './Notification';
import { Button } from '../Button';

afterEach(cleanup);

describe('Notification', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Notification data-testid="notification" open>Hi</Notification>);
    expect(getByTestId('notification')).toBeInTheDocument();
  });

  test('should have visibility: visible when open attribute is true', async () => {
    const { getByTestId } = render(<Notification data-testid="notification" open />);
    await wait(() => expect(getByTestId('notification')).toBeVisible());
  });

  test('should background palette.blue.100 when type is equals to "info"', () => {
    const { getByTestId } = render(<Notification data-testid="notification" type="info" open>Hi</Notification>);
    expect(getByTestId('notification')).toHaveStyle(`
      background-color: #DFECFE;
    `);
  })

  test('should background palette.yellow.100 when type is equals to "warning"', () => {
    const { getByTestId } = render(<Notification data-testid="notification" type="warning" open>Hi</Notification>);
    expect(getByTestId('notification')).toHaveStyle(`
      background-color: #FEEBAF;
    `);
  })

  test('should background palette.green.100 when type is equals to "success"', () => {
    const { getByTestId } = render(<Notification data-testid="notification" type="success" open>Hi</Notification>);
    expect(getByTestId('notification')).toHaveStyle(`
      background-color: #DCFFE6;
    `);
  })

  test('should background palette.red.100 when type is equals to "error"', () => {
    const { getByTestId } = render(<Notification data-testid="notification" type="error" open>Hi</Notification>);
    expect(getByTestId('notification')).toHaveStyle(`
      background-color: #FFDFDF;
    `);
  })

  test('should render actions', async () => {
    const actions = [
      <Button>action1</Button>,
      <Button>action2</Button>,
      <Button>action3</Button>
    ];

    const { getByText } = render(<Notification data-testid="notification" actions={actions} open>Hi</Notification>);

    await wait(() => {
      expect(getByText('action1')).toBeVisible();
      expect(getByText('action2')).toBeVisible();
      expect(getByText('action3')).toBeVisible();
    })
  })

  test('should call onClose callback when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Notification data-testid="notification" onClose={onClose} open>Hi</Notification>);
    getByTestId('notification-close-button').click()
    expect(onClose).toHaveBeenCalled()
  });
});
