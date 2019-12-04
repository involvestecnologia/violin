import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormGroup } from './FormGroup';
import { theme } from '../../theme';

afterEach(cleanup);

describe('FormGroup', () => {
  test('should render correctly', () => {
    const { getByText } = render(<FormGroup>Lorem ipsum</FormGroup>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should have margin style correctly', () => {
    const { getByTestId, rerender } = render(<FormGroup data-testid="component">Lorem ipsum</FormGroup>);
    expect(getByTestId('component')).toHaveStyle(`
      margin-bottom: ${theme.spacing.space4};
    `);
    rerender(<FormGroup noMargin data-testid="component">Lorem ipsum</FormGroup>);
    expect(getByTestId('component')).toHaveStyle(`
      margin-bottom: 0;
    `);
  });
});
