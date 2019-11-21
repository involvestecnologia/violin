import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Button', () => {
  test('renders text', () => {
    const content = 'Lorem ipsum';
    const { getByText } = render(<Button>{content}</Button>);

    expect(getByText(content)).toBeInTheDocument();
  })

  test('renders icon when has icon prop', () => {
    const content = 'Lorem ipsum';
    const { getByText } = render(<Button icon="games">{content}</Button>);
    const iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  })

  test('renders color style when has color prop', () => {
    const content = 'Lorem ipsum';
    const { container } = render(<Button color="error">{content}</Button>);
    expect(container.firstChild).toHaveStyle(`
      background-color: ${theme.palette.error.regular};
    `)
  })
});
