import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { FileUpload } from './FileUpload';

afterEach(cleanup);

describe('FileUpload', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<FileUpload />);
    expect(getByTestId('fileUpload')).toBeInTheDocument();
  });
});
