import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormGroup } from './FormGroup';

afterEach(cleanup);

describe('FormGroup', () => {
  test('renders children', () => {
    const { getByText } = render(<FormGroup>Lorem ipsum</FormGroup>);

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  })
});
