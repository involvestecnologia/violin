import React, { useRef, useState, useEffect } from 'react';
import {
  Container,
  Filter,
  Value,
  Controls,
  ArrowDropdown,
  Input
} from './style';

export const Select = ({ placeholder, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);



  useEffect(() => {
    containerRef.current.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      setActive(true);
      inputRef.current.focus();
    });

    document.addEventListener('mousedown', (e) => {
      if (!containerRef.current.contains(e.target)) {
        setActive(false);
      }
    });

    inputRef.current.addEventListener('focus', (e) => {
      setActive(true);
      inputRef.current.focus();
    });

    inputRef.current.addEventListener('blur', (e) => {
      e.stopPropagation();
      setActive(false);
    });

    // containerRef.current.addEventListener('focusin', e => {
    //   const enteringParent = !containerRef.current.contains(e.relatedTarget);

    //   if (enteringParent) {
    //     setActive(true);
    //   }
    // });

    // containerRef.current.addEventListener('focusout', e => {
    //   const leavingParent = !containerRef.current.contains(e.relatedTarget);

    //   if (leavingParent) {
    //     setActive(false);
    //   }
    // });
  }, []);

  return (
    <Container
      ref={containerRef}
      isActive={active}
    >
      <Filter>
        <Input
          type="text"
          ref={inputRef}
          readOnly
          tabindex="0"
        />
        <Value>{placeholder}</Value>
      </Filter>
      <Controls>
        <ArrowDropdown icon="arrow_drop_down" />
      </Controls>
    </Container>
  )
};
