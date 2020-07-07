import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { List } from './List'

afterEach(cleanup);

describe('List', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<List data-testid="test-list" />);
    expect(getByTestId('test-list')).toBeInTheDocument();
  });

  test('should render children', () => {
    const { getByTestId } = render(
      <List>
        <div data-testid="test-list-item">List Item</div>
      </List>
    );
    expect(getByTestId('test-list-item')).toBeInTheDocument();
  })

  test('should render ListCard', () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId('test-list-card')).toBeInTheDocument();
  })
})
