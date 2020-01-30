import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Modal } from './Modal';

afterEach(cleanup);

describe('Modal', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Modal data-testid="modal" />);
    expect(getByTestId('modal')).toBeInTheDocument();
  });
});
