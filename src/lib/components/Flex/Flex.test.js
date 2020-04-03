import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Flex } from './Flex';

afterEach(cleanup);

describe('Flex', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Flex>Lorem ipsum</Flex>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should render children components correctly', () => {
    const { getByText } = render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    );
    expect(getByText('Item 1')).toBeVisible();
    expect(getByText('Item 2')).toBeVisible();
    expect(getByText('Item 3')).toBeVisible();
  });
});
