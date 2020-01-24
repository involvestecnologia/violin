import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Ballon } from './style';

export const Tooltip = ({ content, placement, children, disableFocus, disableHover, open }) => {
  const [showTip, setShowTip] = useState(open);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({});
  const [triggerElement, setTriggerElement] = useState(null);
  const timerShowTip = useRef();
  const timerHideTip = useRef();

  const offsetTriggerPosition = (element) => {
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
    clearTimeout(timerHideTip.current);
  }

  const stopShowTimer = () => {
    clearTimeout(timerShowTip.current);
  }

  useEffect(() => {
    if (isTriggerHovered || isTipHovered) {
      stopHiddenTimer();

      if (isTipHovered) {
        setShowTip(true);
      } else {
        timerShowTip.current = setTimeout(() => {
          setShowTip(true);
        }, 100);
      }
    }

    if (!isTriggerHovered && !isTipHovered) {
      stopShowTimer();
      timerHideTip.current = setTimeout(() => setShowTip(false), 200);
    }

    return () => {
      stopShowTimer();
      stopHiddenTimer();
    }
  }, [isTriggerHovered, isTipHovered]);

  const onHovered = (elem, value, event) => {
    if (event) {
      setTriggerPosition(offsetTriggerPosition(event.target));
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
      onMouseEnter: (event) => !disableHover && onHovered('trigger', true, event),
      onMouseLeave: (event) => !disableHover && onHovered('trigger', false, event),
      onFocus: (event) => !disableFocus && onHovered('trigger', true, event),
      onBlur: (event) => !disableFocus && onHovered('trigger', false, event),
      'data-testid': 'trigger',
      ...children.props
    });
    setTriggerElement(Elem);
  }, [disableHover, disableFocus]);

  return (
    <>
      {triggerElement}

      {showTip && (
        <Tip
          onMouseEnter={() => onHovered('tip', true)}
          onMouseLeave={() => onHovered('tip', false)}
          triggerPosition={triggerPosition}
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
  children: PropTypes.node.isRequired,
  /** Doesn't show Tooltip when hover children */
  disableFocus: PropTypes.bool,
  /** Doesn't show Tooltip when focus children */
  disableHover: PropTypes.bool,
  open: PropTypes.bool
};

Tooltip.defaultProps = {
  placement: 'top',
  open: false,
  disableFocus: false,
  disableHover: false,
  open: false
};

const Tip = ({ placement, triggerPosition, ...props }) => {
  const [fade, setFade] = useState(false);
  const [place, setPlace] = useState(placement);
  const [position, setPosition] = useState(null);
  const ballonEl = useRef(null);

  useEffect(() => {
    setTimeout(() => setFade(true), 50);
    const {width, height} = ballonEl.current.getBoundingClientRect();
    console.log(width, height);

    switch (placement) {
      case 'top':
        setPosition({
          top: triggerPosition.top - height - 10,
          left: (triggerPosition.left + (triggerPosition.width / 2)) - (width / 2)
        })
        
        break;
      default:
        break;
    }
  }, [triggerPosition, placement]);
  
  const component = (
    <Ballon ref={ballonEl} fade={fade} position={position} placement={place} {...props} />
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
};
