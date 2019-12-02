import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ButtonLink } from './ButtonLink';
import { theme } from '../../theme';

afterEach(cleanup);
const contentButton = 'Lorem ipsum';

describe('ButtonLink', () => {
  test('should render correctly', () => {
    const { getByText } = render(<ButtonLink>{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toBeInTheDocument();
  });

  test('should have color style correctly', () => {
    const { getByText, rerender } = render(<ButtonLink>{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.primary.regular};
    `);

    rerender(<ButtonLink color="primary">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.primary.regular};
    `);

    rerender(<ButtonLink color="white">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.system.white};
    `);

    rerender(<ButtonLink color="primary">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.primary.regular};
    `);

    rerender(<ButtonLink color="done">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.done.regular};
    `);

    rerender(<ButtonLink color="error">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.error.regular};
    `);

    rerender(<ButtonLink color="alert">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.alert.regular};
    `);

    rerender(<ButtonLink color="progress">{contentButton}</ButtonLink>);
    expect(getByText(contentButton)).toHaveStyle(`
      color: ${theme.palette.progress.regular};
    `);
  });
});
