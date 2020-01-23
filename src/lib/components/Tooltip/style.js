import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../utils/getFromTheme';

const arrow = css`
  content: '';
  position: absolute;
  display: block;
  width: 8px;
  height: 8px;
  background-color: ${getFromTheme('palette.black.900')};
  transform: rotate(45deg);
`;

const top = css`
  left: ${({ position }) => position.left + (position.width / 2)}px;
  top: ${({ position }) => position.top - 10}px;
  transform: translate(-50%, -100%);
  margin-top: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    left: 50%;
    margin-left: -4px;
    bottom: -4px;
  }
`;

const topLeft = css`
  left: ${({ position }) => position.left}px;
  top: ${({ position }) => position.top - 10}px;
  transform: translate(0, -100%);
  margin-top: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    left: 0;
    margin-left: 10px;
    bottom: -4px;
  }
`;

const topRight = css`
  left: ${({ position }) => position.left + position.width}px;
  top: ${({ position }) => position.top - 10}px;
  transform: translate(-100%, -100%);
  margin-top: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    right: 0;
    margin-right: 10px;
    bottom: -4px;
  }
`;

const bottom = css`
  left: ${({ position }) => position.left + (position.width / 2)}px;
  top: ${({ position }) => position.top + position.height + 10}px;
  transform: translate(-50%, 0);
  margin-top: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    left: 50%;
    margin-left: -4px;
    top: -4px;
  }
`;

const bottomLeft = css`
  left: ${({ position }) => position.left}px;
  top: ${({ position }) => position.top + position.height + 10}px;
  transform: translate(0, 0);
  margin-top: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    left: 0;
    margin-left: 10px;
    top: -4px;
  }
`;

const bottomRight = css`
  left: ${({ position }) => position.left + position.width}px;
  top: ${({ position }) => position.top + position.height + 10}px;
  transform: translate(-100%, 0);
  margin-top: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    right: 0;
    margin-right: 10px;
    top: -4px;
  }
`;

const left = css`
  left: ${({ position }) => position.left - 10}px;
  top: ${({ position }) => position.top + (position.height / 2)}px;
  transform: translate(-100%, -50%);
  margin-left: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    top: 50%;
    margin-top: -4px;
    right: -4px;
  }
`;

const leftTop = css`
  left: ${({ position }) => position.left - 10}px;
  top: ${({ position }) => position.top}px;
  transform: translate(-100%, 0);
  margin-left: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    top: 0;
    margin-top: 10px;
    right: -4px;
  }
`;

const leftBottom = css`
  left: ${({ position }) => position.left - 10}px;
  top: ${({ position }) => position.top + position.height}px;
  transform: translate(-100%, -100%);
  margin-left: ${ifProp('fade', '0', '5px')};

  &::after {
    ${arrow}
    bottom: 0;
    margin-bottom: 10px;
    right: -4px;
  }
`;

const right = css`
  left: ${({ position }) => position.left + position.width + 10}px;
  top: ${({ position }) => position.top + (position.height / 2)}px;
  transform: translate(0, -50%);
  margin-left: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    top: 50%;
    margin-top: -4px;
    left: -4px;
  }
`;

const rightTop = css`
  left: ${({ position }) => position.left + position.width + 10}px;
  top: ${({ position }) => position.top}px;
  transform: translate(0, 0);
  margin-left: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    top: 0;
    margin-top: 10px;
    left: -4px;
  }
`;

const rightBottom = css`
  left: ${({ position }) => position.left + position.width + 10}px;
  top: ${({ position }) => position.top + position.height}px;
  transform: translate(0, -100%);
  margin-left: ${ifProp('fade', '0', '-5px')};

  &::after {
    ${arrow}
    bottom: 0;
    margin-bottom: 10px;
    left: -4px;
  }
`;

export const Ballon = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z6')};
  ${(props) => props.placement === 'top' && top}
  ${(props) => props.placement === 'bottom' && bottom}
  ${(props) => props.placement === 'left' && left}
  ${(props) => props.placement === 'right' && right}
  ${(props) => props.placement === 'topLeft' && topLeft}
  ${(props) => props.placement === 'topRight' && topRight}
  ${(props) => props.placement === 'leftTop' && leftTop}
  ${(props) => props.placement === 'leftBottom' && leftBottom}
  ${(props) => props.placement === 'bottomLeft' && bottomLeft}
  ${(props) => props.placement === 'bottomRight' && bottomRight}
  ${(props) => props.placement === 'rightTop' && rightTop}
  ${(props) => props.placement === 'rightBottom' && rightBottom}
  max-width: 250px;
  min-width: 180px;
  padding: 6px 10px;
  background: ${getFromTheme('palette.black.900')};
  color: ${getFromTheme('palette.misc.white')};
  font-size: ${getFromTheme('typography.fontSize.small')};
  border-radius: 6px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  opacity: ${ifProp('fade', '1', '0')};
  transition: all 0.2s ease;
`;

export const Trigger = styled.span``;
