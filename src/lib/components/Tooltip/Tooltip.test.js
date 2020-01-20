import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';

afterEach(cleanup);

describe('RadioButton', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Tooltip data-testid="tip" />);
    expect(getByTestId('tip')).toBeInTheDocument();
  });
});
