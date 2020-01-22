import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Tooltip } from './Tooltip';

afterEach(cleanup);

describe('RadioButton', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Tooltip content="Lorem ipsum">A</Tooltip>);
    expect(getByText('A')).toBeInTheDocument();
  });

  test('should not render tooltip in default state', () => {
    const { queryByTestId } = render(<Tooltip content="Lorem ipsum">A</Tooltip>);
    expect(queryByTestId('balloon')).not.toBeInTheDocument();
  });

  test('should render tooltip', () => {
    const { queryByTestId } = render(<Tooltip content="Lorem ipsum" open>A</Tooltip>);
    expect(queryByTestId('balloon')).toBeInTheDocument();
  });

  test('should render correctly content tooltip', () => {
    const { getByTestId } = render(<Tooltip content="Lorem ipsum" open>A</Tooltip>);
    expect(getByTestId('balloon')).toHaveTextContent('Lorem ipsum');
  });
});
