import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { withToastProvider } from './withToastProvider';
import { useToast } from './useToast';
import ToastContext from './context';
import { Button } from '../Button';
import Toast from './Toast';

afterEach(cleanup);
jest.useFakeTimers();

describe('Title', () => {
  test('should render correctly', () => {
    const Tree = () => (
      <ToastContext.Provider value={{ add: jest.fn(), remove: jest.fn() }}>
        <Button>Show Toast</Button>
      </ToastContext.Provider>
    )
    const { getByText } = render(<Tree />);
    expect(getByText('Show Toast')).toBeInTheDocument();
  });

  test('should render Toast when click button', () => {
    const Tree = withToastProvider(() => {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add('Lorem ipsum')}>Open Toast</Button>
      )
    })
    const { getByText } = render(<Tree />);
    expect(getByText('Open Toast')).toBeInTheDocument();

    fireEvent.click(getByText('Open Toast'))
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should close Toast when click in close button', () => {
    const Tree = withToastProvider(() => {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add('Lorem ipsum', { closable: true })}>Open Toast</Button>
      )
    })
    const { getByText, getByTestId, queryAllByText } = render(<Tree />);
    expect(getByText('Open Toast')).toBeInTheDocument();

    fireEvent.click(getByText('Open Toast'))
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
    expect(getByTestId('toast-close-button')).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByTestId('toast-close-button'));
      jest.runAllTimers();
    });

    expect(queryAllByText('Lorem ipsum')).toEqual([]);
  });

  test('should render action correctly', () => {
    const fn = jest.fn();
    const Tree = withToastProvider(() => {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add('Lorem ipsum', { action: { label: 'Action', method: fn } })}>Open Toast</Button>
      )
    })
    const { getByText, getByTestId } = render(<Tree />);

    fireEvent.click(getByText('Open Toast'))
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
    expect(getByTestId('toast-action-button')).toBeInTheDocument();

    fireEvent.click(getByTestId('toast-action-button'));

    expect(fn).toHaveBeenCalled();
  });

  test('should render custom action correctly', () => {
    const Tree = withToastProvider(() => {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add('Lorem ipsum', { customAction: <button type="button">Custom action button</button> })}>Open Toast</Button>
      )
    })
    const { getByText } = render(<Tree />);

    fireEvent.click(getByText('Open Toast'))
    expect(getByText('Custom action button')).toBeInTheDocument();
  });

  test('should pass props to container toast', () => {
    const Tree = withToastProvider(() => {
      const toast = useToast();
      return (
        <Button onClick={() => toast.add('Lorem ipsum', { customAction: <button type="button">Custom action button</button> })}>Open Toast</Button>
      )
    }, { role: 'violin-toast-container' })
    const { getByText, getByRole } = render(<Tree />);

    fireEvent.click(getByText('Open Toast'))
    expect(getByRole('violin-toast-container')).toBeInTheDocument();
  });

  test('should render Toast component correctly', () => {
    let showToast = false;
    const onHideToast = jest.fn();
    const actionMethod = jest.fn();

    const ToastComponent = () => (
      <Toast
        show={showToast}
        onHide={onHideToast}
        action={{
          label: 'Click me',
          method: actionMethod
        }}
        closable
      >
        Lorem ipsum
      </Toast>
    )

    const { getByText, rerender } = render(<ToastComponent />);

    expect(getByText('Lorem ipsum')).not.toBeVisible();

    showToast = true;
    rerender(<ToastComponent />);

    expect(getByText('Lorem ipsum')).toBeVisible();
  });
});
