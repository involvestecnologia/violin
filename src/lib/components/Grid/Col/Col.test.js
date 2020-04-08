import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Col } from './Col';

afterEach(cleanup);

describe('Col', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Col>Lorem ipsum</Col>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
