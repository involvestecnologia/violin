import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextArea } from './TextArea';

afterEach(cleanup);

describe('TextArea', () => {
  test('should render correct value', () => {
    const value = 'Hi!'
    const { getByTestId } = render(<TextArea value={value} data-testid="textarea" onChange={() => {}} />)

    expect(getByTestId('textarea').value).toEqual(value)
  })
});
