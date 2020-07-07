import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { rem } from 'polished'
import { theme } from '../../../theme'
import { ListItemGrouper } from './ListItemGrouper'

afterEach(cleanup);

describe('ListItemGrouper', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ListItemGrouper data-testid="test-list-item-grouper" />);
    expect(getByTestId('test-list-item-grouper')).toBeInTheDocument();
    expect(getByTestId('test-list-item-grouper')).toHaveStyle(`
      font-size: ${rem(11)};
      text-transform: uppercase;
      color: ${theme.palette.black[400]};
      padding: 10px 16px 4px 16px;
      margin: 0;
      cursor: default;
      user-select: none;
    `)
  });

  test('should render children correctly', () => {
    const { getByTestId } = render(
      <ListItemGrouper data-testid="test-list-item-grouper">
        List Item Grouper
      </ListItemGrouper>
    );
    expect(getByTestId('test-list-item-grouper').textContent).toEqual('List Item Grouper')
  })
})
