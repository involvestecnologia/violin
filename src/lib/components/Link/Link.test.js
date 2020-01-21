import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Link } from './Link';

afterEach(cleanup);
const contentButton = 'Click';

describe('Link', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Link href="http://involves.com">{contentButton}</Link>);
    expect(getByText(contentButton)).toBeInTheDocument();
  });

  test('should have style correctly', () => {
    const { getByText, rerender } = render(<Link href="http://involves.com">{contentButton}</Link>);
    expect(getByText(contentButton)).toHaveStyle(`
      text-decoration: none;
    `);

    rerender(<Link href="http://involves.com" invert>{contentButton}</Link>);
    expect(getByText(contentButton)).toHaveStyle(`
      text-decoration: underline;
    `);
  });

  test('should have target correctly', () => {
    const { getByText, rerender } = render(<Link href="http://involves.com">{contentButton}</Link>);
    expect(getByText(contentButton)).toHaveAttribute('target', '_self');

    rerender(<Link href="http://involves.com" external>{contentButton}</Link>);
    expect(getByText(contentButton)).toHaveAttribute('target', '_blank');
  });
});
