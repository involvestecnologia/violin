import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { transparentize } from 'polished'
import { theme } from '../../../theme';
import { ListCard } from './ListCard'

afterEach(cleanup);

describe('ListCard', () => {
  test('should render trigger correctly', () => {
    const { getByTestId } = render(<ListCard />);
    expect(getByTestId('test-list-card')).toBeInTheDocument();
  });

  test('should render correct styles', () => {
    const { getByTestId } = render(<ListCard />);
    expect(getByTestId('test-list-card')).toHaveStyle(`
      position: absolute;
      z-index: ${theme.zIndex.z6};
      min-width: 160px;
      width: fit-content;
      opacity: 0;
      border-radius: 4px;
      background-color: ${theme.palette.misc.white};
      padding: 8px 0;
      box-shadow: 0 5px 10px ${transparentize(0.8, theme.palette.black[900])};
      transition-property: opacity;
      transition-duration: .1s;
      transition-timing-function: ease;
    `);
  })

  test('should render correct styles with fadeInProp', () => {
    const { getByTestId } = render(<ListCard fadeIn />);
    expect(getByTestId('test-list-card')).toHaveStyle(`
      opacity: 1;
    `);
  })
})
