import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormGroup } from './FormGroup';

afterEach(cleanup);

describe('FormGroup', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<FormGroup />);
    expect(getByTestId('wrapper')).toBeInTheDocument();
  });

  test('should display label if has prop', () => {
    const { queryByTestId, getByTestId, rerender } = render(<FormGroup />);
    expect(queryByTestId('label-text')).toBeNull();
    rerender(<FormGroup label="Lorem ipsum" />);
    expect(getByTestId('label-text')).toBeInTheDocument();
    expect(getByTestId('label-text')).toHaveTextContent('Lorem ipsum');
  });

  test('should display help label text if has prop', () => {
    const { queryByTestId, getByTestId, rerender } = render(<FormGroup />);
    expect(queryByTestId('help-label')).toBeNull();
    rerender(<FormGroup helpLabel="Lorem ipsum" />);
    expect(getByTestId('help-label')).toBeInTheDocument();
    expect(getByTestId('help-label')).toHaveTextContent('Lorem ipsum');
  });

  test('should display info icon with tooltip', () => {
    const { queryByTestId, getByTestId, rerender } = render(<FormGroup />);
    expect(queryByTestId('info-icon')).toBeNull();
    rerender(<FormGroup tooltip="Lorem ipsum" />);
    expect(getByTestId('info-icon')).toBeInTheDocument();
  });

  test('should display content children', () => {
    const { getByText } = render(<FormGroup>This is a content</FormGroup>);
    expect(getByText('This is a content')).toBeInTheDocument();
  });

  test('should display help text if has prop', () => {
    const { queryByTestId, getByTestId, rerender } = render(<FormGroup />);
    expect(queryByTestId('help-text')).toBeNull();
    rerender(<FormGroup helpText="Lorem ipsum" />);
    expect(getByTestId('help-text')).toBeInTheDocument();
    expect(getByTestId('help-text')).toHaveTextContent('Lorem ipsum');
  });
});
