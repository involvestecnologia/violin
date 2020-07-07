import React from 'react'
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { withArrowNavigation } from './withArrowNavigation'
import { theme } from '../../../theme'
import { List } from '../List'
import { ListItem } from '../ListItem'
import { ListItemGrouper } from '../ListItemGrouper'

afterEach(cleanup)

const ListHOC = withArrowNavigation(List)

const Wrapper = (props) => (
  <ListHOC fadeIn {...props}>
    <ListItemGrouper>Agrupador 1</ListItemGrouper>
    <ListItem data-testid="test-list-item1">Item 1</ListItem>
    <ListItem data-testid="test-list-item2">Item 2</ListItem>
    <ListItemGrouper>Agrupador 2</ListItemGrouper>
    <ListItem data-testid="test-list-item3">Item 3</ListItem>
    <ListItem data-testid="test-list-item4">Item 4</ListItem>
  </ListHOC>
)

describe('withArrowNavigation', () => {
  test('should navigate to first item', () => {
    const { getByTestId } = render(<Wrapper data-testid="test-wrapper" />)

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    expect(getByTestId('test-list-item1')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should navigate from first to second item', () => {
    const { getByTestId } = render(<Wrapper data-testid="test-wrapper" />)

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    expect(getByTestId('test-list-item2')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should navigate from first to last item', () => {
    const { getByTestId } = render(<Wrapper data-testid="test-wrapper" />)

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    expect(getByTestId('test-list-item4')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should navigate from last to first item', () => {
    const { getByTestId } = render(<Wrapper data-testid="test-wrapper" />)

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    act(() => {
      fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 40 });
    })

    expect(getByTestId('test-list-item1')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  // test('should navigate to last item', () => {
  //   const { getByTestId } = render(<Wrapper data-testid="test-wrapper" />)

  //   act(() => {
  //     fireEvent.keyDown(getByTestId('test-wrapper'), { keyCode: 38 });
  //   })

  //   expect(getByTestId('test-list-item4')).toHaveStyle(`
  //     background: ${theme.palette.primary[100]};
  //   `);
  // })
})
