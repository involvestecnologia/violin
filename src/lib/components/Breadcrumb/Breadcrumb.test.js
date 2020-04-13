import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

afterEach(cleanup);

describe('Breadcrumb', () => {
  test('should render one item', () => {
    const paths = [
      { to: () => {}, label: 'Level One' }
    ]
    const { getByTestId } = render(<Breadcrumb paths={paths} />);
    expect(getByTestId('current-item')).toBeInTheDocument();
  });

  test('should render two items', () => {
    const paths = [
      { to: () => {}, label: 'Level One' },
      { to: () => {}, label: 'Level Two' }
    ]
    const { getByTestId } = render(<Breadcrumb paths={paths} />);
    expect(getByTestId('current-item')).toBeInTheDocument();
    expect(getByTestId('button-item')).toBeInTheDocument();
  });

  test('should render trhee items', () => {
    const paths = [
      { to: () => {}, label: 'Level One' },
      { to: () => {}, label: 'Level Two' },
      { to: () => {}, label: 'Level Trhee' }
    ]
    const { getByTestId } = render(<Breadcrumb paths={paths} />);
    expect(getByTestId('elipsis-item')).toBeInTheDocument();
    expect(getByTestId('button-item')).toBeInTheDocument();
    expect(getByTestId('current-item')).toBeInTheDocument();
  });

  test('should render four or more items', () => {
    const paths = [
      { to: () => {}, label: 'Level One' },
      { to: () => {}, label: 'Level Two' },
      { to: () => {}, label: 'Level Trhee' },
      { to: () => {}, label: 'Level Four' }
    ]
    const { getByTestId } = render(<Breadcrumb paths={paths} />);
    expect(getByTestId('elipsis-dropdown')).toBeInTheDocument();
    expect(getByTestId('button-item')).toBeInTheDocument();
    expect(getByTestId('current-item')).toBeInTheDocument();
  });
});
