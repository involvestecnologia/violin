import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

describe('Button', () => {
	test('renders text', () => {
    const content = "Lorem ipsum"; 
    const { getByText } = render(<Button>{content}</Button>);

		expect(getByText(content)).toBeInTheDocument();
  })
  
  test('renders icon when has icon prop', () => {
    const content = "Lorem ipsum"; 
    const { getByText } = render(<Button icon="games">{content}</Button>);
    const iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  })
});