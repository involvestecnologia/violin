import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import ToastContext from './context';
import ToastWrapper from './ToastWrapper';
import idgen from '../../utils/idgen';
import { StyledContainer } from './style';

export const withToastProvider = (Component) => {
  const provider = (props) => {
    const [toasts, setToasts] = useState([]);

    const add = (content, options) => {
      const id = idgen();
      setToasts([...toasts, { id, content, options }]);
    };

    const remove = (id) => {
      setToasts(toasts.filter((t) => t.id !== id));
    }

    const providerValue = useMemo(() => ({ add, remove }), [toasts]);

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />

        {typeof window !== 'undefined' && createPortal(
          <StyledContainer show={toasts.length > 0}>
            {toasts.map((t) => (
              <ToastWrapper key={t.id} options={t.options} remove={() => remove(t.id)}>
                {t.content}
              </ToastWrapper>
            ))}
          </StyledContainer>,
          document.querySelector('body')
        )}
      </ToastContext.Provider>
    );
  }

  return provider;
}
