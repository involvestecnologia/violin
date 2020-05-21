import React, { useRef } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import { theme } from '../../../theme'
import { SelectInput } from './SelectInput';

afterEach(cleanup);

const Wrapper = ({
  isFocused,
  disabled,
  error,
  onMouseDown,
  selected,
  isMenuOpen,
  onTyping,
  clearSelect,
  isSearchable,
  placeholder,
}) => {
  const inputRef = useRef(null)
  return (
    <>
      <SelectInput
        isFocused={isFocused}
        onMouseDown={onMouseDown}
        inputRef={inputRef}
        onFocus={() => { }}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        clearSelect={clearSelect}
        isSearchable={isSearchable}
        onTyping={onTyping}
        isMenuOpen={isMenuOpen}
        error={error}
      />
    </>
  )
}

Wrapper.propTypes = {
  isFocused: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onMouseDown: PropTypes.func,
  selected: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }),
  isMenuOpen: PropTypes.bool,
  onTyping: PropTypes.func,
  clearSelect: PropTypes.func,
  isSearchable: PropTypes.bool,
  placeholder: PropTypes.string,
}

Wrapper.defaultProps = {
  isFocused: false,
  disabled: false,
  error: false,
  onMouseDown: () => { },
  selected: { value: '', label: '' },
  isMenuOpen: false,
  onTyping: () => { },
  clearSelect: () => { },
  isSearchable: false,
  placeholder: '',
}

describe('SelectInput', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Wrapper />);
    expect(getByTestId('select-input')).toBeInTheDocument();
  });

  test('should apply correct styles when isFocused is true', () => {
    const { getByTestId } = render(<Wrapper isFocused />);

    expect(getByTestId('select-input')).toHaveStyle(`
      background-color: ${theme.palette.misc.white};
      box-shadow: 0 0 0 2px ${theme.palette.primary[500]};
    `);
  })

  test('should apply correct styles when disabled is true', () => {
    const { getByTestId } = render(<Wrapper disabled />);

    expect(getByTestId('select-input')).toHaveStyle(`
      background-color: ${transparentize(0.96, theme.palette.misc.black)};
      color: ${transparentize(0.75, theme.palette.black[900])};
      cursor: not-allowed;
    `);
  })

  test('should apply correct styles when error is true', () => {
    const { getByTestId } = render(<Wrapper error />);

    expect(getByTestId('select-input')).toHaveStyle(`
      box-shadow: 0 0 0 2px ${theme.palette.red[600]};
      background-color: ${transparentize(0.2, theme.palette.red[100])};
    `);
  })

  test('should call onMouseDown prop callback when onMouseDown event is triggered', () => {
    const onMouseDown = jest.fn()
    const { getByTestId } = render(<Wrapper onMouseDown={onMouseDown} />)
    fireEvent.mouseDown(getByTestId('select-input'));
    expect(onMouseDown).toHaveBeenCalled()
  })

  test('should reset input when onMouseDown event is triggered', () => {
    const { getByTestId } = render(<Wrapper />)
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$23.0' } })
    fireEvent.mouseDown(getByTestId('select-input'));
    expect(getByTestId('input-select-filter')).toHaveValue('');
  })

  test('should reset input when selected prop state changes', () => {
    const { getByTestId, rerender } = render(<Wrapper />)
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$23.0' } })
    expect(getByTestId('input-select-filter')).toHaveValue('$23.0');
    rerender(<Wrapper selected={{ value: 'lorem', label: 'ipsum' }} />)
    expect(getByTestId('input-select-filter')).toHaveValue('');
  })

  test('should reset input when isMenuOpen changes from true to false', () => {
    const { getByTestId, rerender } = render(<Wrapper isMenuOpen />)
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$23.0' } })
    expect(getByTestId('input-select-filter')).toHaveValue('$23.0');
    rerender(<Wrapper />)
    expect(getByTestId('input-select-filter')).toHaveValue('');
  })

  test('should call onTyping callback when searchTerm state changes', () => {
    const onTyping = jest.fn()
    const { getByTestId } = render(<Wrapper onTyping={onTyping} />) // first call is made on render
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$23.0' } }) // second call
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$24.0' } }) // third call
    expect(onTyping).toHaveBeenCalledTimes(3)
  })

  test('should call clearSelect callback when clear button is clicked', () => {
    const clearSelect = jest.fn()
    const { getByTestId } = render(
      <Wrapper
        isFocused
        clearSelect={clearSelect}
        selected={{ label: 'lorem', value: 'ipsum' }}
      />
    )
    fireEvent.click(getByTestId('input-select-clear'))
    expect(clearSelect).toHaveBeenCalledTimes(1)
  })

  test('should reset and focus input when clear button is clicked and input is dirty', () => {
    const clearSelect = jest.fn()
    const { getByTestId } = render(
      <Wrapper
        isFocused
        clearSelect={clearSelect}
      />
    )
    fireEvent.change(getByTestId('input-select-filter'), { target: { value: '$23.0' } })
    fireEvent.click(getByTestId('input-select-clear'))
    expect(getByTestId('input-select-filter')).toHaveValue('');
  })

  describe('SearchIcon', () => {
    test('should render SearchIcon when isSearchable is true', () => {
      const { getByTestId } = render(<Wrapper isSearchable />);
      expect(getByTestId('select-input-search-icon')).toBeInTheDocument();
    })

    test('should apply correct styles to SearchIcon when isFocused is true', () => {
      const { getByTestId } = render(<Wrapper isSearchable isFocused />);

      expect(getByTestId('select-input-search-icon')).toHaveStyle(`
        width: 1.5rem;
        opacity: 1;
      `);
    })
  })

  describe('Value', () => {
    test('should render Value when input is empty and there is an item selected', () => {
      const { getByTestId } = render(<Wrapper selected={{ label: 'lorem', value: 'ipsum' }} />);
      expect(getByTestId('select-input-value-container')).toBeInTheDocument();
    })
  })

  describe('Placeholder', () => {
    test('should render Placeholder when input is empty', () => {
      const { getByTestId } = render(<Wrapper placeholder="Lorem Ipsum" />);
      expect(getByTestId('select-input-placeholder')).toBeInTheDocument();
    })
  })

  describe('Controls', () => {
    test('should render ArrowDropdown', () => {
      const { getByTestId } = render(
        <Wrapper
          isFocused
        />
      );
      expect(getByTestId('select-input-arrow-icon')).toBeInTheDocument();
    })

    test('should render clear button', () => {
      const { getByTestId } = render(
        <Wrapper
          isFocused
          selected={{ label: 'lorem', value: 'ipsum' }}
        />
      );
      expect(getByTestId('input-select-clear')).toBeInTheDocument();
    })
  })
})
