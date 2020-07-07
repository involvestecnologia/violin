import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { rem, transparentize } from 'polished'
import { theme } from '../../../theme'
import { ListItem } from './ListItem'

afterEach(cleanup);

describe('ListItem', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ListItem data-testid="test-list-item" />);
    expect(getByTestId('test-list-item')).toBeInTheDocument();
    expect(getByTestId('test-list-item')).toHaveStyle(`
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 16px;
      font-size: ${theme.typography.fontSize.body};
      color: ${theme.palette.black[900]};
      text-decoration: none;
      cursor: pointer;
      opacity: 1;
    `)
  });

  test('should render children', () => {
    const { getByTestId } = render(
      <ListItem>
        <div data-testid="test-list-item-children">Children</div>
      </ListItem>
    );
    expect(getByTestId('test-list-item-children')).toBeInTheDocument();
  })

  test('should render disabled', () => {
    const { getByTestId } = render(<ListItem data-testid="test-list-item" disabled />);
    expect(getByTestId('test-list-item')).toHaveStyle(`
      cursor: not-allowed;
      opacity: 0.2;
    `);
  })

  test('should render icon', () => {
    const { getByTestId } = render(<ListItem icon="face" />);
    expect(getByTestId('test-list-item-icon')).toBeInTheDocument();
    expect(getByTestId('test-list-item-icon')).toHaveStyle(`
      margin-right: 10px;
      font-size: ${rem(24)};
      color: ${theme.palette.black[600]};
    `);
  })

  test('should not select nor highlight if not selectable', () => {
    const { getByTestId } = render(
      <ListItem
        data-testid="test-list-item"
        selected
        highlighted
        selectable={false}
      />
    );
    expect(getByTestId('test-list-item')).toHaveStyle(`
      background: none;
    `);
  })

  test('should select item', () => {
    const { getByTestId } = render(
      <ListItem
        data-testid="test-list-item"
        selected
        highlighted={false}
        selectable
      />
    );
    expect(getByTestId('test-list-item')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should highlitght item', () => {
    const { getByTestId } = render(
      <ListItem
        data-testid="test-list-item"
        selected={false}
        highlighted
        selectable
      />
    );
    expect(getByTestId('test-list-item')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);
  })

  test('should select and highlitght item', () => {
    const { getByTestId } = render(
      <ListItem
        data-testid="test-list-item"
        selected
        highlighted
        selectable
      />
    );
    expect(getByTestId('test-list-item')).toHaveStyle(`
      background: ${theme.palette.primary[200]};
    `);
  })
})
