import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Ballon } from './style';

export const Tooltip = ({ content, placement, children, open }) => {
  const [showTip, setShowTip] = useState(open);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [position, setPosition] = useState({});
  const [timerShowTip, setTimerShowTip] = useState(null);
  const [timerHideTip, setTimerHideTip] = useState(null);
  const [triggerElement, setTriggerElement] = useState(null);

  const offsetPosition = (element) => {
    const rect = element.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height
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

  const onHovered = (elem, value, event) => {
    if (event) {
      setPosition(offsetPosition(event.target));
    }
    switch (elem) {
      case 'trigger':
        setIsTriggerHovered(value);
        break;
      case 'tip':
        setIsTipHovered(value);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const Elem = () => React.cloneElement(children, {
      onMouseEnter: (event) => onHovered('trigger', true, event),
      onMouseLeave: (event) => onHovered('trigger', false, event),
      onFocus: (event) => onHovered('trigger', true, event),
      onBlur: (event) => onHovered('trigger', false, event),
      'data-testid': 'trigger'
    });
    setTriggerElement(Elem);
  }, []);

  return (
    <>
      {triggerElement}

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
  open: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Tooltip.defaultProps = {
  placement: 'top',
  open: false
};

const Tip = ({ placement, ...props }) => {
  const [fade, setFade] = useState(false);
  const [place, setPlace] = useState(placement);
  const ballonEl = useRef(null);

  useEffect(() => {
    setTimeout(() => setFade(true), 50);
    const balloonPosition = ballonEl.current.getBoundingClientRect();

    switch (placement) {
      case 'top':
        if (balloonPosition.left < 0) {
          setPlace('topLeft');
        }
        break;
      case 'left':
        if (balloonPosition.left < 0) {
          setPlace('right');
        }
        break;
      case 'right':
        if (balloonPosition.left < 0) {
          setPlace('right');
        }
        break;
      default:
        break;
    }
  }, []);

  const component = (
    <Ballon ref={ballonEl} fade={fade} placement={place} {...props} />
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
};
