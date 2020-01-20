import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Ballon, Trigger } from './style';

export const Tooltip = ({ content, children }) => {
  const [open, setOpen] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [position, setPosition] = useState({});
  const triggerEl = useRef(null);

  useEffect(() => {
    setPosition(triggerEl.current.getBoundingClientRect())
  }, []);

  useEffect(() => {
    if (isTriggerHovered || isTipHovered) {
      setOpen(true);
    }

    if (!isTriggerHovered && !isTipHovered) {
      setOpen(false);
    }
  }, [isTriggerHovered, isTipHovered]);

  return (
    <>
      <Trigger
        ref={triggerEl}
        onMouseEnter={() => setTimeout(() => setIsTriggerHovered(true), 100)}
        onMouseLeave={() => setTimeout(() => setIsTriggerHovered(false), 300)}
      >
        {children}
      </Trigger>

      {open && (
        <Tip
          onMouseEnter={() => setTimeout(() => setIsTipHovered(true), 100)}
          onMouseLeave={() => setTimeout(() => setIsTipHovered(false), 300)}
          position={position}
        >
          {content}
        </Tip>
      )}
    </>
  )
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Tooltip.defaultProps = {};

const Tip = (props) => {
  const component = (
    <Ballon {...props} />
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
};
