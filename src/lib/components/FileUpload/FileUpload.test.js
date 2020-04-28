import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FileUpload } from './FileUpload';

afterEach(cleanup);

const loadFileMock = new File(['(⌐□_□)'], 'chucknorris.png', {
  type: 'image/png',
});

const loadFileMock2 = new File(['image'], 'image.png', {
  type: 'image/png',
});

describe('FileUpload', () => {
  global.URL.createObjectURL = jest.fn();

  test('should render correctly', () => {
    const { getByTestId } = render(<FileUpload />);
    expect(getByTestId('fileUpload')).toBeInTheDocument();
  });

  test('should load single file and render preview', async () => {
    const { getByTestId, getByText } = render(<FileUpload />);

    const inputEl = getByTestId('fileUploadInput');

    await act(async () => {
      fireEvent.change(inputEl, { target: { files: [loadFileMock] } });
    });

    expect(getByText('chucknorris.png')).toBeInTheDocument();
    expect(getByTestId('fileUploadPreviewInfo')).toBeInTheDocument();
    expect(getByTestId('fileUploadPreviewImage')).toBeInTheDocument();
  });

  test('should remove file', async () => {
    const { queryByTestId, queryByText } = render(<FileUpload />);

    const inputEl = queryByTestId('fileUploadInput');

    await act(async () => {
      fireEvent.change(inputEl, { target: { files: [loadFileMock] } });
    });

    expect(queryByText('chucknorris.png')).toBeInTheDocument();
    expect(queryByTestId('fileUploadPreviewInfo')).toBeInTheDocument();
    expect(queryByTestId('fileUploadPreviewImage')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(queryByTestId('fileUploadPreviewRemove'));
    });

    expect(queryByText('chucknorris.png')).not.toBeInTheDocument();
    expect(queryByTestId('fileUploadPreviewInfo')).not.toBeInTheDocument();
    expect(queryByTestId('fileUploadPreviewImage')).not.toBeInTheDocument();
  });

  test('should load multiple files and render list', async () => {
    const { getByTestId, queryAllByTestId } = render(<FileUpload multiple />);

    const inputEl = getByTestId('fileUploadInput');

    await act(async () => {
      fireEvent.change(inputEl, { target: { files: [loadFileMock, loadFileMock2] } });
    });

    expect(getByTestId('fileUploadList')).toBeInTheDocument();
    expect(queryAllByTestId('fileUploadListItem')).toHaveLength(2);
  });

  test('should remove one of multiple files', async () => {
    const { queryByTestId, queryAllByTestId } = render(<FileUpload multiple />);

    const inputEl = queryByTestId('fileUploadInput');

    await act(async () => {
      fireEvent.change(inputEl, { target: { files: [loadFileMock, loadFileMock2] } });
    });

    expect(queryByTestId('fileUploadList')).toBeInTheDocument();
    expect(queryAllByTestId('fileUploadListItem')).toHaveLength(2);

    await act(async () => {
      fireEvent.click(queryAllByTestId('fileUploadListRemove')[0]);
    });

    expect(queryAllByTestId('fileUploadListItem')).toHaveLength(1);
  });
});
