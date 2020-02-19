import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Notification } from './Notification';

afterEach(cleanup);

describe('Notification', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Notification data-testid="notification" open>Oi</Notification>);
    expect(getByTestId('notification')).toBeInTheDocument();
  });
});
