import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

afterEach(cleanup);

describe('RadioButton', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<RadioButton data-testid="radio" />);
    expect(getByTestId('radio')).toBeInTheDocument();
  });

  test('should be hidden radio element', () => {
    const { container } = render(<RadioButton />);
    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });

  test('should have label text', () => {
    const { getByText } = render(<RadioButton label="Lorem ipsum" />);
    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });

  test('should have checked style when is checked', () => {
    const { container, getByTestId } = render(<RadioButton />);
    expect(getByTestId('checked-circle')).not.toBeVisible();

    fireEvent.click(container.firstChild);
    expect(container.querySelector('input')).toBeChecked();
  });
});
