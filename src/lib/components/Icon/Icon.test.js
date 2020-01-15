import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Icon } from './Icon';

afterEach(cleanup);

describe('Icon', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Icon data-testid="icon" icon="favorite" />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  test('should render icon correctly', () => {
    const { getByTestId } = render(<Icon data-testid="icon" icon="favorite" />);
    expect(getByTestId('icon')).toHaveTextContent('favorite');
  });
});
