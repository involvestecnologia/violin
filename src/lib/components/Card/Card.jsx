import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardHeader,
  CardTitles,
  CardActions,
} from './style';
import { Subheading } from '../Subheading';
import { Text } from '../Text';

export const Card = ({ children, title, subTitle, actions }) => (
  <CardWrapper>
    {(title || subTitle || actions) && (
      <CardHeader>
        {(title || subTitle) && (
          <CardTitles>
            {title && <Subheading size="h6">{title}</Subheading>}
            {subTitle && <Text>{subTitle}</Text>}
          </CardTitles>
        )}
        {actions && <CardActions>{actions.map((action) => action)}</CardActions>}
      </CardHeader>
    )}
    <Text>{children}</Text>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.element)
};

Card.defaultProps = {
  title: null,
  subTitle: null,
  actions: null,
};
