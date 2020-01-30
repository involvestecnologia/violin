import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardHeader,
  CardTitles,
  CardTitle,
  CardSubTitle,
  CardActions,
  CardContent,
} from './style';

export const Card = ({ children, title, subTitle, actions }) => (
  <CardWrapper>
    {(title || subTitle || actions) && (
      <CardHeader>
        {(title || subTitle) && (
          <CardTitles>
            {title && <CardTitle title={title} size="h6">{title}</CardTitle>}
            {subTitle && <CardSubTitle title={subTitle} overline>{subTitle}</CardSubTitle>}
          </CardTitles>
        )}
        {actions && <CardActions>{actions}</CardActions>}
      </CardHeader>
    )}
    <CardContent>{children}</CardContent>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  actions: PropTypes.element,
};

Card.defaultProps = {
  title: null,
  subTitle: null,
  actions: null,
};
