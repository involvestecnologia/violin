import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';

export const Dropdown = ({ children, trigger, preventClose }) => {
  const [open, setOpen] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({});
  const triggerRef = useRef({});

  const handleClick = (event, propEvent) => {
    const position = offsetElementPosition(event.target);
    setTriggerPosition(position);
    setOpen(!open);
    if (propEvent) propEvent();
  };

  const closeDropdown = () => {
    if (!preventClose) {
      setOpen(false);
    }
  }

  const Trigger = () => React.cloneElement(trigger, {
    ...trigger.props,
    refTrigger: () => triggerRef.current = trigger.props.ref,
    onClick: (event) => handleClick(event, trigger.props.onClick)
  });

  console.log(triggerRef.current)
  
  return (
    <>
      <Trigger />

      {open && (
        <DropdownCard
          closeDropdown={() => setOpen(false)}
          triggerPosition={triggerPosition}
          onClick={closeDropdown}
        >
          {children}
        </DropdownCard>
      )}
    </>
  )
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  /** Prevent dropdown close when clicked */
  preventClose: PropTypes.bool
};

Dropdown.defaultProps = {
  preventClose: false
}

const DropdownCard = ({ closeDropdown, ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const timerShow = useRef();
  const cardRef = useRef({});

  useEffect(() => {
    timerShow.current = setTimeout(() => setFadeIn(true), 50);

    const listenClose = (e) => {
      if (!cardRef.current.contains(e.target)) {
        timerShow.current = setTimeout(() => setFadeIn(false), 50);
        closeDropdown()
      }
    }

    document.addEventListener('click', listenClose);

    return () => {
      clearTimeout(timerShow.current);
      document.removeEventListener('click', listenClose);
    }
  }, []);

  const component = (
    <StyledCard ref={cardRef} fadeIn={fadeIn} {...props} />
  );
  return ReactDOM.createPortal(component, document.querySelector('body'));
};
