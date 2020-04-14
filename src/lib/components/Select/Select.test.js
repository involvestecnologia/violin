import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Select } from './Select';

afterEach(cleanup);

const colorOptions = [
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' }
];

const groupOptions = [
  {
    label: 'Colors',
    options: [
      { value: 'blue', label: 'Blue' },
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
    ],
  },
  {
    label: 'Country',
    options: [
      { value: 'br', label: 'Brazil' },
      { value: 'pt', label: 'Portugal' },
      { value: 'us', label: 'United States' },
    ],
  },
];

describe('Select', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Select options={colorOptions} />);
    expect(getByTestId('select')).toBeInTheDocument();
  });

  test('should render placeholder correctly', () => {
    const { getByText } = render(<Select options={colorOptions} placeholder="Selecione" />);
    expect(getByText('Selecione')).toBeInTheDocument();
  })

  test('should render menu when click', () => {
    const { queryByTestId, getByTestId } = render(<Select options={colorOptions} />);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();

    fireEvent.mouseDown(getByTestId('select-input'));
    expect(getByTestId('select-menu')).toBeInTheDocument();
  });

  test('should auto select option item from value prop', () => {
    const { getByTestId } = render(<Select options={colorOptions} value={{ value: 'red' }} />);
    expect(getByTestId('select-input-value')).toHaveValue('red');
  });

  test('should select option item when click option item menu', () => {
    const { queryAllByTestId, getByTestId } = render(<Select options={colorOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    fireEvent.click(queryAllByTestId('select-menu-item')[1]);
    expect(getByTestId('select-input-value')).toHaveValue('red');
  });

  test('should clean selected value when clear icon is clicked', () => {
    const { getByTestId, queryAllByTestId } = render(<Select options={colorOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    fireEvent.click(queryAllByTestId('select-menu-item')[1]);
    expect(getByTestId('select-input-value')).toHaveValue('red');

    fireEvent.click(getByTestId('input-select-clear'));
    expect(getByTestId('select-input-value')).toHaveValue('');
  });

  test('should render items correctly when options is grouped', () => {
    const { queryAllByTestId, getByTestId } = render(<Select options={groupOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    expect(queryAllByTestId('select-menu-item')[0]).toHaveTextContent('Colors');
    expect(queryAllByTestId('select-menu-item')[1]).toHaveTextContent('Blue');
    expect(queryAllByTestId('select-menu-item')[2]).toHaveTextContent('Red');
    expect(queryAllByTestId('select-menu-item')[3]).toHaveTextContent('Green');
    expect(queryAllByTestId('select-menu-item')[4]).toHaveTextContent('Country');
    expect(queryAllByTestId('select-menu-item')[5]).toHaveTextContent('Brazil');
    expect(queryAllByTestId('select-menu-item')[6]).toHaveTextContent('Portugal');
    expect(queryAllByTestId('select-menu-item')[7]).toHaveTextContent('United States');
  });

  test('should render option items filtered', () => {
    const { queryAllByTestId, getByTestId } = render(<Select options={colorOptions} searchable />);

    fireEvent.input(getByTestId('input-select-filter'), { target: { value: 'r' } });
    expect(queryAllByTestId('select-menu-item')[0]).toHaveTextContent('Red');
    expect(queryAllByTestId('select-menu-item')[1]).toHaveTextContent('Green');
  });

  test('should render empty message when filter no match', () => {
    const { queryAllByTestId, getByTestId } = render(<Select options={colorOptions} searchable />);
    const input = getByTestId('input-select-filter');

    fireEvent.input(input, { target: { value: 'aa' } });
    expect(queryAllByTestId('select-menu-item')).toHaveLength(0);
    expect(getByTestId('select-menu-empty')).toBeInTheDocument();
  });

  test('should open or close menu when Space key is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Select options={colorOptions} />);
    const select = getByTestId('input-select-filter');

    fireEvent.focus(select);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: 32 });
    expect(queryByTestId('select-menu')).toBeInTheDocument();
    fireEvent.keyDown(document, { keyCode: 32 });
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  test('should open menu when Up and Down key is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Select options={colorOptions} />);
    const select = getByTestId('input-select-filter');

    fireEvent.focus(select);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
    // Up key
    fireEvent.keyDown(document, { keyCode: 38 });
    expect(queryByTestId('select-menu')).toBeInTheDocument();
    fireEvent.mouseDown(getByTestId('select-input'));
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
    // Down key
    fireEvent.keyDown(document, { keyCode: 40 });
    expect(queryByTestId('select-menu')).toBeInTheDocument();
  });

  test('should close menu when Tab key is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Select options={colorOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    expect(queryByTestId('select-menu')).toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: 9 });
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  test('should close menu when Esc key is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Select options={colorOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    expect(queryByTestId('select-menu')).toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: 27 });
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  test('should open menu when Enter key is pressed', () => {
    const { getByTestId, queryByTestId } = render(<Select options={colorOptions} />);
    const select = getByTestId('input-select-filter');

    fireEvent.focus(select);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: 13 });
    expect(queryByTestId('select-menu')).toBeInTheDocument();
  });

  test('should match value selected when select item', () => {
    const { getByTestId } = render(<Select options={colorOptions} />);

    fireEvent.mouseDown(getByTestId('select-input'));
    fireEvent.keyDown(document, { keyCode: 13 }); // Enter key
    expect(getByTestId('select-input-value')).toHaveValue('blue');

    fireEvent.mouseDown(getByTestId('select-input'));
    fireEvent.keyDown(document, { keyCode: 40 }); // Down key
    fireEvent.keyDown(document, { keyCode: 13 }); // Enter key
    expect(getByTestId('select-input-value')).toHaveValue('red');
  });
});
