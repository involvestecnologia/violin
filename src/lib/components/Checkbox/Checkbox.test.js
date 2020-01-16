import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

afterEach(cleanup);

describe('Checkbox', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Checkbox data-testid="checkbox" />);
    expect(getByTestId('checkbox')).toBeInTheDocument();
  });

  test('should be hidden checkbox element', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });

  test('should have label text', () => {
    const { getByText } = render(<Checkbox label="Lorem ipsum" />);
    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });

  test('should have label with custom component', () => {
    const { getByTestId } = render(<Checkbox customLabel={<h2 data-testid="checkbox">Lorem ipsum</h2>} />);
    expect(getByTestId('checkbox')).toHaveTextContent('Lorem ipsum');
  });

  test('should have checked style when is checked', () => {
    const { container, getByTestId } = render(<Checkbox />);
    expect(getByTestId('checked-icon')).not.toBeVisible();

    fireEvent.click(container.firstChild);
    expect(container.firstChild.querySelector('input')).toBeChecked();
    expect(getByTestId('checked-icon')).toBeVisible();
  });
});
