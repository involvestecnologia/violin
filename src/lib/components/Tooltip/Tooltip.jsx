import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Balloon } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';

export const Tooltip = ({ content, placement, children, disableFocus, disableHover }) => {
  const [showTip, setShowTip] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isTipHovered, setIsTipHovered] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({});
  const [triggerElement, setTriggerElement] = useState(null);
  const timerShowTip = useRef();
  const timerHideTip = useRef();

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

  const onHovered = (elem, value, event, propEvent) => {
    if (event) {
      setTriggerPosition(offsetElementPosition(event.target));
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
    if (propEvent) {
      propEvent();
    }
  }

  useEffect(() => {
    const Elem = () => React.cloneElement(children, {
      ...children.props,
      onMouseEnter: (event) => !disableHover && onHovered('trigger', true, event, children.props.onMouseEnter),
      onMouseLeave: (event) => !disableHover && onHovered('trigger', false, event, children.props.onMouseLeave),
      onFocus: (event) => !disableFocus && onHovered('trigger', true, event, children.props.onFocus),
      onBlur: (event) => !disableFocus && onHovered('trigger', false, event, children.props.onBlur),
      'data-testid': 'trigger'
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
          position={triggerPosition}
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
  children: PropTypes.node.isRequired,
  /** Doesn't show Tooltip when hover children */
  disableFocus: PropTypes.bool,
  /** Doesn't show Tooltip when focus children */
  disableHover: PropTypes.bool
};

Tooltip.defaultProps = {
  placement: 'top',
  disableFocus: false,
  disableHover: false
};

const dynamicPositionTooltip = (placement, tooltip, setCallback) => {
  if (tooltip.top - 5 < 0) {
    switch (placement) {
      case 'top':
        setCallback('bottom');
        break;
      case 'topLeft':
        setCallback('bottomLeft');
        break;
      case 'topRight':
        setCallback('bottomRight');
        break;
      case 'left':
        setCallback('leftTop');
        break;
      case 'right':
        setCallback('rightTop');
        break;
      case 'leftTop':
        setCallback('leftBottom');
        break;
      case 'rightTop':
        setCallback('rightBottom');
        break;
      default:
        break;
    }
  }

  if (tooltip.left - 5 < 0) {
    switch (placement) {
      case 'top':
        setCallback('topLeft');
        break;
      case 'bottom':
        setCallback('bottomLeft');
        break;
      case 'left':
        setCallback('bottomLeft');
        break;
      case 'leftTop':
        setCallback('topLeft');
        break;
      case 'leftBottom':
        setCallback('bottomLeft');
        break;
      case 'topRight':
        setCallback('topLeft');
        break;
      case 'bottomRight':
        setCallback('bottomLeft');
        break;
      default:
        break;
    }
  }

  if (tooltip.right + 20 > window.innerWidth) {
    switch (placement) {
      case 'top':
        setCallback('topRight');
        break;
      case 'bottom':
        setCallback('bottomRight');
        break;
      case 'right':
        setCallback('bottomRight');
        break;
      case 'rightTop':
        setCallback('topRight');
        break;
      case 'rightBottom':
        setCallback('bottomRight');
        break;
      default:
        break;
    }
  }

  if (tooltip.bottom + 5 > window.innerHeight) {
    switch (placement) {
      case 'bottom':
        setCallback('top');
        break;
      case 'bottomLeft':
        setCallback('topLeft');
        break;
      case 'bottomRight':
        setCallback('topRight');
        break;
      case 'right':
        setCallback('rightBottom');
        break;
      case 'left':
        setCallback('leftBottom');
        break;
      case 'leftTop':
        setCallback('leftBottom');
        break;
      case 'rightTop':
        setCallback('rightBottom');
        break;
      default:
        break;
    }
  }
}

const Tip = ({ placement, ...props }) => {
  const [fade, setFade] = useState(false);
  const [dynamicPlacement, setDynamicPlacement] = useState(placement);
  const tooltipElement = useRef(null);
  const timerShow = useRef();

  useEffect(() => {
    timerShow.current = setTimeout(() => setFade(true), 50);
    const tooltipPosition = tooltipElement.current.getBoundingClientRect();
    const repositionTooltip = (pos) => {
      setDynamicPlacement(pos);
    }
    dynamicPositionTooltip(dynamicPlacement, tooltipPosition, repositionTooltip);

    return () => {
      clearTimeout(timerShow.current);
    }
  }, [dynamicPlacement]);

  const component = (
    <Balloon ref={tooltipElement} fade={fade} placement={dynamicPlacement} {...props} />
  );

  return ReactDOM.createPortal(component, document.querySelector('body'));
};
