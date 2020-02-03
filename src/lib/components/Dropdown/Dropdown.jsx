import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCard, Trigger } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';

export const Dropdown = ({ children, trigger, preventClose, open }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({});
  const triggerRef = useRef({});

  const openDropdown = () => {
    const position = offsetElementPosition(triggerRef.current);
    setTriggerPosition(position);
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

const DropdownCard = ({ closeDropdown, ...props }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const timerShow = useRef();
  const cardRef = useRef({});

  useEffect(() => {
    timerShow.current = setTimeout(() => setFadeIn(true), 50);

    const listenClose = (e) => {
      if (!cardRef.current.contains(e.target)) {
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
