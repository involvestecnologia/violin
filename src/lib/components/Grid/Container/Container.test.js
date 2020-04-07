import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Container } from './Container';

afterEach(cleanup);

describe('Container', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Container>Lorem ipsum</Container>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
