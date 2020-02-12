import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label } from './Label';

afterEach(cleanup);

describe('Label', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Label content="Lorem ipsum" />);
    expect(getByTestId('label-container')).toBeInTheDocument();
  });

  test('should display help label if has prop', () => {
    const { queryByTestId, getByTestId, rerender } = render(<Label content="Lorem ipsum" />);
    expect(queryByTestId('help-label')).toBeNull();
    rerender(<Label content="Lorem ipsum" helpContent="dolor sit amet" />);
    expect(getByTestId('help-label')).toBeInTheDocument();
  });
});
