import React from 'react';
import PropTypes from 'prop-types';
import { Transition as Animate } from 'react-transition-group';

export const Transition = ({ animation, show, duration, children }) => {
  let defaultStyle;
  let transitionStyles;

  switch (animation) {
    case 'fadeDown':
      defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        maxHeight: 0,
        visibility: 'hidden'
      };

      transitionStyles = {
        entering: { opacity: 1, maxHeight: 900, visibility: 'visible' },
        entered: { opacity: 1, maxHeight: 900, visibility: 'visible' },
        exiting: { opacity: 0, maxHeight: 0, visibility: 'hidden' },
        exited: { opacity: 0, maxHeight: 0, visibility: 'hidden' },
      };
      break;
    default:
      // FadeIn
      defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0
      }

      transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      };
      break;
  }

  return (
    <Animate in={show} timeout={duration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Animate>
  );
};

Transition.propTypes = {
  animation: PropTypes.string,
  show: PropTypes.bool,
  duration: PropTypes.number
};

Transition.defaultProps = {
  animation: 'fadeDown',
  show: false,
  duration: 300
};
