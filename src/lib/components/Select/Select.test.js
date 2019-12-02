import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Select } from './Select';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Select', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(
      <Select
        data-testid="select"
        options={[
          { label: '---', value: 0 },
          { label: 'Item 1', value: 'Item 1' },
          { label: 'Item 2', value: 'Item 2' },
          { label: 'Item 3', value: 'Item 3' },
        ]}
      />
    );
    expect(getByTestId('select')).toBeInTheDocument();
  });

  test('should render arrow icon', () => {
    const { container } = render(
      <Select
        data-testid="select"
        options={[
          { label: '---', value: 0 },
          { label: 'Item 1', value: 'Item 1' },
          { label: 'Item 2', value: 'Item 2' },
          { label: 'Item 3', value: 'Item 3' },
        ]}
      />
    );
    expect(container.firstChild).toContainElement(document.querySelector('i'));
  });

  test('should render option elements', () => {
    const { container } = render(
      <Select
        data-testid="select"
        options={[
          { label: '---', value: 0 },
          { label: 'Item 1', value: 'Item 1' },
          { label: 'Item 2', value: 'Item 2' },
          { label: 'Item 3', value: 'Item 3' },
        ]}
      />
    );
    expect(container.firstChild).toContainElement(document.querySelector('option'));
  });
});
