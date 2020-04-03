import React from 'react';
import PropTypes from 'prop-types';
import { Flexbox } from './style';

export const Flex = (props) => (
  <Flexbox {...props} />
);

Flex.propTypes = {
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']),
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse', 'initial', 'inherit']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'initial', 'inherit']),
  alignContent: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
  order: PropTypes.oneOfType([PropTypes.oneOf(['initial', 'inherit']), PropTypes.number]),
  flexGrow: PropTypes.oneOfType([PropTypes.oneOf(['initial', 'inherit']), PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.oneOf(['initial', 'inherit']), PropTypes.number]),
  alignSelf: PropTypes.oneOf(['auto', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
  flex: PropTypes.string
};

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  order: null,
  flexGrow: 0,
  flexShrink: 1,
  alignSelf: 'auto',
  flex: null
};
