import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { render, cleanup } from '@testing-library/react';
import { SelectMenu, SelectMenuItem } from './index';

afterEach(cleanup);

const Wrapper = ({ loading, children }) => {
  const ref = useRef(null)
  const onSelect = () => { }
  return (
    <SelectMenu menuRef={ref} loading={loading} onSelectOption={onSelect}>
      {children}
    </SelectMenu>
  )
}
Wrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array]),
}
Wrapper.defaultProps = {
  loading: false,
  children: null,
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
})
