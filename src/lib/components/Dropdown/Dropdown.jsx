
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Trigger } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';
import { DropdownCard } from './DropdownCard'

export const Dropdown = ({ children, trigger, preventClose, placement, open }) => {
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
          placement={placement}
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
  open: PropTypes.bool,
  /** Change position dropdown */
  placement: PropTypes.oneOf(['left', 'right'])
};

Dropdown.defaultProps = {
  preventClose: false,
  open: false,
  placement: 'left'
}
