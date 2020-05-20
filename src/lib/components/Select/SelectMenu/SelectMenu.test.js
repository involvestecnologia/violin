import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { transparentize } from 'polished';
import { theme } from '../../../theme'
import { SelectMenu, SelectMenuItem } from './index';

afterEach(cleanup);

const Wrapper = ({ loading, children, onSelect }) => {
  const ref = useRef(null)
  return (
    <SelectMenu menuRef={ref} loading={loading} onSelectOption={onSelect}>
      {children}
    </SelectMenu>
  )
}
Wrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array]),
  onSelect: PropTypes.func,
}
Wrapper.defaultProps = {
  loading: false,
  children: null,
  onSelect: () => {},
}

describe('SelectMenu', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId('select-menu')).toBeInTheDocument();
  })

  test('should render EmptyFilter when not loading and there is no children', () => {
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId('select-menu-empty')).toBeInTheDocument();
  })

  test('should render Loading when loading is true', () => {
    const { getByTestId } = render(<Wrapper loading />);
    expect(getByTestId('select-menu-loading')).toBeInTheDocument();
  })

  test('should render children', () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectMenuItem>My Item 1</SelectMenuItem>
        <SelectMenuItem>My Item 2</SelectMenuItem>
      </Wrapper>
    );
    expect(getByTestId('select-menu').children.length).toEqual(2)
  })

  test('should select highlighted item when enter key is pressed', () => {
    const Container = () => {
      const [selected, setSelected] = useState(0)
      const onSelect = (value) => {
        setSelected(value)
      }
      return (
        <Wrapper onSelect={onSelect}>
          <SelectMenuItem
            data-testid="select-item-1"
            value={{ label: 'My Item 1', value: 'My Item 1' }}
            selected={selected.value === 'My Item 1'}
          >
            My Item 1
          </SelectMenuItem>
          <SelectMenuItem data-testid="select-item-2">My Item 2</SelectMenuItem>
          <SelectMenuItem data-testid="select-item-3">My Item 3</SelectMenuItem>
          <SelectMenuItem data-testid="select-item-4">My Item 4</SelectMenuItem>
          <SelectMenuItem data-testid="select-item-5">My Item 5</SelectMenuItem>
        </Wrapper>
      )
    }
    const { getByTestId } = render(<Container />);

    expect(getByTestId('select-item-1')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Enter key to select highlighted item. First item should be highlighted by default
    fireEvent.keyDown(document, { keyCode: 13 });
    expect(getByTestId('select-item-1')).toHaveStyle(`
      background: ${theme.palette.primary[200]};
    `);
  })

  test('should open menu when Up and Down key is pressed', () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectMenuItem data-testid="select-item-1">My Item 1</SelectMenuItem>
        <SelectMenuItem data-testid="select-item-2">My Item 2</SelectMenuItem>
        <SelectMenuItem data-testid="select-item-3">My Item 3</SelectMenuItem>
        <SelectMenuItem data-testid="select-item-4">My Item 4</SelectMenuItem>
        <SelectMenuItem data-testid="select-item-5">My Item 5</SelectMenuItem>
      </Wrapper>
    );
    // Up key on first item goes to the last
    fireEvent.keyDown(document, { keyCode: 38 });
    expect(getByTestId('select-item-5')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Up key on last item goes to seconde-last
    fireEvent.keyDown(document, { keyCode: 38 });
    expect(getByTestId('select-item-4')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Down key back to first item
    fireEvent.keyDown(document, { keyCode: 40 });
    fireEvent.keyDown(document, { keyCode: 40 });
    expect(getByTestId('select-item-1')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Down key to second item
    fireEvent.keyDown(document, { keyCode: 40 });
    expect(getByTestId('select-item-2')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Down key to last item
    fireEvent.keyDown(document, { keyCode: 40 });
    fireEvent.keyDown(document, { keyCode: 40 });
    fireEvent.keyDown(document, { keyCode: 40 });
    expect(getByTestId('select-item-5')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);

    // Down key on last item returns to the start of the list
    fireEvent.keyDown(document, { keyCode: 40 });
    expect(getByTestId('select-item-1')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);
  });
})
