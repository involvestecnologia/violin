import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);
const contentButton = 'Lorem ipsum';

describe('Button', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toBeInTheDocument();
  });

  test('should render icon element', () => {
    const { getByText } = render(<Button icon="games" />);
    const iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  });

  test('should have block style', () => {
    const { getByText, rerender } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      width: auto;
    `);

    rerender(<Button block>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      width: 100%;
    `);
  });
});
