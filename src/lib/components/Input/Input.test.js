import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import { theme } from '../../theme';

afterEach(cleanup);

const placeholder = 'Lorem ipsum';

describe('Input', () => {
  test('should render correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  })

  test('should have correctly type', () => {
    const { getByPlaceholderText, rerender } = render(<Input type="number" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('number');

    rerender(<Input type="email" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('email');

    rerender(<Input type="password" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('password');

    rerender(<Input type="tel" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('tel');

    rerender(<Input type="url" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('url');
  })

  test('should be disabled', () => {
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} disabled />);
    expect(getByPlaceholderText(placeholder)).toBeDisabled();
  })

  test('should have size style correctly', () => {
    const { getByPlaceholderText, rerender } = render(<Input placeholder={placeholder} size="small" />);
    expect(getByPlaceholderText(placeholder)).toHaveStyle(`
      min-height: 32px;
    `);

    rerender(<Input placeholder={placeholder} size="large" />);
    expect(getByPlaceholderText(placeholder)).toHaveStyle(`
      min-height: 60px;
    `);
  })

  test('should have error style', () => {
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} error />);
    expect(getByPlaceholderText(placeholder)).toHaveStyle(`
      background-color: ${theme.palette.error.white};
      box-shadow: inset ${theme.shadow.shadowBorder2} ${theme.palette.error.regular};
    `);
  })

  test('should render icon', () => {
    const { getByText } = render(<Input icon="favorite" />);
    expect(getByText('favorite')).toBeInTheDocument();
  })

  test('should call onClickIcon', () => {
    const onClickIcon = jest.fn();
    const { getByText } = render(<Input icon="favorite" onClickIcon={onClickIcon} />);
    const component = getByText('favorite');
    fireEvent.click(component);
    expect(onClickIcon).toHaveBeenCalled();
  })
});
