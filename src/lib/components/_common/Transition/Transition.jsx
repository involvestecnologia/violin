import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Transition as Animate } from 'react-transition-group';

export const Transition = ({ show, immediately, closeAfter, duration, children }) => {
  const contentRef = useRef({});
  const [showImmediately, setShowImmediately] = useState(false);

  useEffect(() => {
    if (immediately) {
      setTimeout(() => {
        setShowImmediately(true)
      }, 100);
      setTimeout(() => {
        setShowImmediately(false)
      }, (duration - 300));
    }
  }, []);

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    maxHeight: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0, maxHeight: 0 },
    entered: { opacity: 1, maxHeight: 1000 },
    exiting: { opacity: 0, maxHeight: 0 }
  };

  return (
    <Animate
      in={immediately ? showImmediately : show}
      timeout={{
        enter: 0,
        exit: duration
      }}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          ref={contentRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {children}
        </div>
      )}
    </Animate>
  );
};

Transition.propTypes = {
  show: PropTypes.bool,
  duration: PropTypes.number
};

Transition.defaultProps = {
  show: false,
  duration: 300
};
