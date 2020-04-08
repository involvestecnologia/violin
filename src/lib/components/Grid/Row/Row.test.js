import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Row } from './Row';

afterEach(cleanup);

describe('Row', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Row>Lorem ipsum</Row>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
