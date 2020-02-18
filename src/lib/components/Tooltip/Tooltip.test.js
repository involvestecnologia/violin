import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Tooltip } from './Tooltip';
import { TextField } from '../TextField';

afterEach(cleanup);
jest.useFakeTimers();

describe('Tooltip', () => {
  test('children should render correctly', () => {
    const { getByTestId } = render(<Tooltip content="Lorem ipsum"><span data-testid="trigger">Trigger</span></Tooltip>);
    expect(getByTestId('trigger')).toBeInTheDocument();
  });

  test('should render when mouse enter', () => {
    const { getByTestId } = render(<Tooltip content="Lorem ipsum"><span data-testid="trigger">Trigger</span></Tooltip>);

    act(() => {
      fireEvent.mouseOver(getByTestId('trigger'));
      jest.advanceTimersByTime(100);
    });

    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });

  test('should render when trigger has focus', () => {
    const { getByTestId } = render(<Tooltip content="Lorem ipsum"><TextField data-testid="trigger" /></Tooltip>);

    act(() => {
      fireEvent.focus(getByTestId('trigger'));
      jest.advanceTimersByTime(100);
    });

    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });
});
