import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

afterEach(cleanup);

describe('RadioButton', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ProgressBar show />);
    expect(getByTestId('progressBar')).toBeInTheDocument();
  });

  test('should display component when show is true', () => {
    let show = false;
    const { getByTestId, rerender } = render(<ProgressBar show={show} />);
    expect(getByTestId('progressBar')).not.toBeVisible();

    show = true;
    rerender(<ProgressBar show={show} />);
    expect(getByTestId('progressBar')).toBeVisible();
  });

  test('should position component to the top', () => {
    const { getByTestId } = render(<ProgressBar show fixed />);
    expect(getByTestId('progressBar')).toHaveStyle({
      position: 'fixed',
      top: 0,
      left: 0
    });
  });
});
