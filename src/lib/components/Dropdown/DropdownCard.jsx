import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { List } from '../_common/List'

export const DropdownCard = ({ closeDropdown, triggerPosition, placement, ...props }) => {
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
    const isTop = trigger.bottom + card.height > window.scrollY + window.innerHeight;
    const isRight = (trigger.left + card.width > window.innerWidth) || placement === 'right';
    const dynamicPosition = {
      top: isTop ? (trigger.top - card.height) + 2 : trigger.bottom - 2,
      left: isRight ? trigger.right - card.width : trigger.left
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
    <List
      ref={cardRef}
      fadeIn={fadeIn}
      position={position}
      {...props}
    />
  );
  return ReactDOM.createPortal(component, typeof document !== 'undefined' && document.querySelector('body'));
};
