import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCard, Trigger } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';

export const Dropdown = ({ children, trigger, preventClose, open }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({});
  const triggerRef = useRef({});

  const handleTriggerPosition = () => {
    const position = offsetElementPosition(triggerRef.current);
    setTriggerPosition(position);
  }

  const openDropdown = () => {
    handleTriggerPosition();
    setCollapsed(true);
  }

  const closeDropdown = () => {
    if (!preventClose) {
      setCollapsed(false);
    }
  }

  useEffect(() => {
    if (open) {
      openDropdown();
    } else {
      setCollapsed(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('resize', handleTriggerPosition);
    return () => {
      window.removeEventListener('resize', handleTriggerPosition);
    }
  }, []);

  return (
    <>
      <Trigger ref={triggerRef} onClick={openDropdown}>
        {trigger}
      </Trigger>

      {collapsed && (
        <DropdownCard
          closeDropdown={closeDropdown}
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
  preventClose: PropTypes.bool,
  /** Use with preventClose for managing status Dropdown */
  open: PropTypes.bool
};

Dropdown.defaultProps = {
  preventClose: false,
  open: false
}

const DropdownCard = ({ closeDropdown, triggerPosition, ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [position, setPosition] = useState({});
  const timerShow = useRef(null);
  const cardRef = useRef(null);

  const listenClose = (e) => {
    if (!cardRef.current.contains(e.target)) {
      closeDropdown()
    }
  };

  const handlePosition = () => {
    const trigger = triggerPosition;
    const card = cardRef.current.getBoundingClientRect();
    const dynamicPosition = {
      top: trigger.bottom + card.height > window.scrollY + window.innerHeight
        ? trigger.top - card.height
        : trigger.bottom,
      left: trigger.left + card.width > window.innerWidth
        ? trigger.right - card.width
        : trigger.left
    };
    setPosition(dynamicPosition);
  };

  useEffect(() => {
    timerShow.current = setTimeout(() => setFadeIn(true), 50);
    document.addEventListener('click', listenClose);

    return () => {
      clearTimeout(timerShow.current);
      document.removeEventListener('click', listenClose);
    }
  }, []);

  useEffect(() => {
    handlePosition();
    window.addEventListener('scroll', handlePosition);

    return () => {
      window.removeEventListener('scroll', handlePosition);
    }
  }, [triggerPosition]);

  const component = (
    <StyledCard
      ref={cardRef}
      fadeIn={fadeIn}
      position={position}
      {...props}
    />
  );
  return ReactDOM.createPortal(component, document.querySelector('body'));
};
