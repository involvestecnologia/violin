import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Ballon, Trigger } from './style';

export const Tooltip = ({ content, placement, children, open }) => {
  const [showTip, setShowTip] = useState(open);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [position, setPosition] = useState({});
  const triggerEl = useRef(null);
  const [timerShowTip, setTimerShowTip] = useState(null);
  const [timerHideTip, setTimerHideTip] = useState(null);

  const offsetPosition = (element) => {
    const rect = element.current.firstChild.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { 
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height
    }
  }

  const onHovered = (elem, event) => {
    setPosition(offsetPosition(triggerEl));

    switch (elem) {
      case 'trigger':
        setIsTriggerHovered(event);
        break;
      case 'tip':
        setIsTipHovered(event);
        break;
    }
  }

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
        setShowTip(true);
      } else {
        const showTimer = setTimeout(() => {
          setShowTip(true);
        }, 100);
        setTimerShowTip(showTimer);
      }
    }

    if (!isTriggerHovered && !isTipHovered) {
      stopShowTimer();
      const hideTip = setTimeout(() => setShowTip(false), 200);
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
        onMouseEnter={() => onHovered('trigger', true)}
        onMouseLeave={() => onHovered('trigger', false)}
        data-testid="trigger"
      >
        {children}
      </Trigger>

      {showTip && (
        <Tip
          onMouseEnter={() => onHovered('tip', true)}
          onMouseLeave={() => onHovered('tip', false)}
          position={position}
          placement={placement}
          data-testid="balloon"
        >
          {content}
        </Tip>
      )}
    </>
  )
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
  open: PropTypes.bool
};

Tooltip.defaultProps = {
  placement: 'top',
  open: false
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
