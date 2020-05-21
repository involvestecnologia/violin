import styled, { css } from 'styled-components';
import { ifProp, withProp, ifNotProp } from 'styled-tools';
import { rem, transparentize } from 'polished';
import { Icon } from '../Icon';
import getFromTheme from '../../utils/getFromTheme';

const primaryStyle = css`
  color: ${ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.misc.white'))};
  background-color: ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))};
  border: 1px solid ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))};

  &:hover,
  &:focus {
    background-color: ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.400'))};
    border-color: ${ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.misc.white'))};
    box-shadow: 0 0 0 2px ${ifProp('invert', withProp(getFromTheme('palette.misc.white'), transparentize(0.5)), withProp(getFromTheme('palette.primary.400'), transparentize(0.5)))};
  }

  &:active {
    background-color: ${ifProp('invert', withProp(getFromTheme('palette.misc.white'), transparentize(0.3)), getFromTheme('palette.primary.600'))};
    border-color: ${ifProp('invert', getFromTheme('palette.black.900'), getFromTheme('palette.primary.600'))};
    box-shadow: 0 0 0 transparent;
  }

  &:disabled {
    background-color: ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.400')), transparentize(0.7))};
    border: none;
    box-shadow: 0 0 0 transparent;
  }
`;

const dangerStyle = css`
  color: ${getFromTheme('palette.misc.white')};
  background-color: ${getFromTheme('palette.red.600')};
  border: 1px solid ${getFromTheme('palette.red.600')};

  &:hover,
  &:focus {
    background-color: ${getFromTheme('palette.red.500')};
    border-color: ${getFromTheme('palette.misc.white')};
    box-shadow: 0 0 0 2px ${withProp(getFromTheme('palette.red.500'), transparentize(0.5))};
  }

  &:active {
    background-color: ${getFromTheme('palette.red.700')};
    border-color: ${getFromTheme('palette.red.700')};
    box-shadow: 0 0 0 transparent;
  }

  &:disabled {
    background-color: ${withProp(getFromTheme('palette.red.500'), transparentize(0.7))};
    border: none;
    box-shadow: 0 0 0 transparent;
  }
`;

const defaultStyle = css`
  color: ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))};
  background-color: transparent;
  border: 1px solid ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))};

  &:hover,
  &:focus {
    background-color: transparent;
    box-shadow: 0 0 0 2px ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500')), transparentize(0.5))},
                inset 0 0 0 1px ${ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'))};
  }

  &:active {
    background-color: ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.92))};
    box-shadow: 0 0 0 transparent;
  }

  &:disabled {
    background-color: transparent;
    border-color: ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.9))};
    box-shadow: 0 0 0 transparent;
    color: ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.75))};
  }
`;

const secondaryStyle = css`
  color: ${ifProp('iconOnly', ifProp('invert', getFromTheme('palette.misc.white'), withProp(getFromTheme('palette.black.900'), transparentize(0.3))), ifProp('invert', getFromTheme('palette.primary.300'), getFromTheme('palette.primary.500')))};
  background-color: transparent;
  border: none;
  ${(props) => props.iconOnly && 'border-radius: 50%;'}
  width: ${ifProp(
    'iconOnly',
    ifProp(
      'small',
      '30px',
      ifProp(
        'large',
        '52px',
        '40px'
      )
    ),
    'auto'
  )};

  &:hover,
  &:focus {
    background-color: ${withProp(
      ifProp(
        'invert',
        getFromTheme('palette.misc.white'),
        getFromTheme('palette.primary.900')
      ),
      transparentize(0.92)
    )};
  }

  &:active {
    background-color: ${withProp(
      ifProp(
        'invert',
        getFromTheme('palette.misc.white'),
        getFromTheme('palette.primary.900')
      ),
      ifProp(
        'invert',
        transparentize(0.80),
        transparentize(0.85)
      )
    )};
  }

  &:disabled {
    background-color: transparent;
    border: none;
    box-shadow: 0 0 0 transparent;
    color: ${withProp(ifProp('invert', getFromTheme('palette.misc.white'), getFromTheme('palette.primary.900')), transparentize(0.75))};
  }
`;

export const StyledButton = styled.button`
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding: 0 ${ifProp('small', '10px', ifProp('large', '16px', '12px'))};
  outline: none;
  font-family: ${getFromTheme('typography.fontFamily')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  transition: ${getFromTheme('common.transition')};
  height: ${ifProp('small', '30px', ifProp('large', '52px', '40px'))};
  font-size: ${ifProp('small', rem(13), ifProp('large', rem(18), rem(14)))};
  display: ${ifProp('block', 'flex', 'inline-flex')};
  width: ${ifProp(
    'block',
    '100%',
    ifProp(
      'iconOnly',
      ifProp(
        'small',
        '30px',
        ifProp(
          'large',
          '52px',
          '40px'
        )
      ),
      'auto'
    )
  )};
  min-width: ${ifNotProp(
    'iconOnly',
    '80px',
    'auto'
  )};
  box-shadow: 0 0 0 transparent;
  ${(props) => !props.primary && !props.secondary && !props.danger && defaultStyle}
  ${(props) => props.primary && primaryStyle}
  ${(props) => props.danger && dangerStyle}
  ${(props) => props.secondary && secondaryStyle}
  ${(props) => (props.iconOnly && 'padding: 0;')}

  > i {
    font-size: ${ifProp('small', rem(20), ifProp('large', rem(32), rem(26)))};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled(Icon)`
  margin: ${({ right }) => (right ? ifProp('hasChildren', '0 0 0 5px', '0') : ifProp('hasChildren', '0 5px 0 0', '0'))};
`;
