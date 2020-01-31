import React from 'react';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Modal', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<div data-testid="modal">oi</div>);
    expect(getByTestId('modal')).toBeInTheDocument();
  });
});
