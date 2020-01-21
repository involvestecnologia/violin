import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Ballon, Trigger } from './style';

export const Tooltip = ({ content, placement, children }) => {
  const [open, setOpen] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [position, setPosition] = useState({});
  const triggerEl = useRef(null);
  const [timerShowTip, setTimerShowTip] = useState(null);
  const [timerHideTip, setTimerHideTip] = useState(null);

  useEffect(() => {
    setTimeout(() => setPosition(triggerEl.current.firstChild.getBoundingClientRect()), 300);
  }, []);

  const stopHiddenTimer = () => {
    clearTimeout(timerHideTip);
  }

  const stopShowTimer = () => {
    clearTimeout(timerShowTip);
  }

  useEffect(() => {
    if (isTriggerHovered || isTipHovered) {
      stopHiddenTimer();

      if (isTipHovered) {
        setOpen(true);
      } else {
        const showTip = setTimeout(() => {
          setOpen(true);
        }, 100);
        setTimerShowTip(showTip);
      }
    }

    if (!isTriggerHovered && !isTipHovered) {
      stopShowTimer();
      const hideTip = setTimeout(() => setOpen(false), 200);
      setTimerHideTip(hideTip);
    }

    return () => {
      stopShowTimer();
      stopHiddenTimer();
    }
  }, [isTriggerHovered, isTipHovered]);

  return (
    <>
      <Trigger
        ref={triggerEl}
        onMouseEnter={() => setIsTriggerHovered(true)}
        onMouseLeave={() => setIsTriggerHovered(false)}
      >
        {children}
      </Trigger>

      {open && (
        <Tip
          onMouseEnter={() => setIsTipHovered(true)}
          onMouseLeave={() => setIsTipHovered(false)}
          position={position}
          placement={placement}
        >
          {content}
        </Tip>
      )}
    </>
  )
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'])
};

Tooltip.defaultProps = {
  placement: 'bottom'
};

const Tip = (props) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 50);
  }, []);

  const component = (
    <Ballon fade={fade} {...props} />
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
};
