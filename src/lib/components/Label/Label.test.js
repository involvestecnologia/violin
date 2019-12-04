import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label } from './Label';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Label', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Label>Lorem ipsum</Label>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should have small element when has description prop', () => {
    const { getByText, rerender } = render(<Label>Lorem ipsum</Label>);
    expect(getByText('Lorem ipsum')).toContainHTML('Lorem ipsum');
    rerender(<Label description="Dolor sit amet">Lorem ipsum</Label>);
    expect(getByText('- Dolor sit amet')).toBeInTheDocument();
  });

  test('should have disabled style', () => {
    const { getByText } = render(<Label disabled>Lorem ipsum</Label>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.default.regular};
    `);
  })
});
