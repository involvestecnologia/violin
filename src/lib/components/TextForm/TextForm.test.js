import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextForm } from './TextForm';
import { theme } from '../../theme';

afterEach(cleanup);

describe('TextForm', () => {
  test('should render correctly', () => {
    const { getByText } = render(<TextForm>Lorem ipsum</TextForm>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should have color validate style correctly', () => {
    const { getByText, rerender } = render(<TextForm>Lorem ipsum</TextForm>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.default.dark};
    `);
    rerender(<TextForm validate="alert">Lorem ipsum</TextForm>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.alert.regular};
    `);
    rerender(<TextForm validate="done">Lorem ipsum</TextForm>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.done.regular};
    `);
    rerender(<TextForm validate="error">Lorem ipsum</TextForm>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.error.dark};
    `);
  });
});
