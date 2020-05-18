import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { transparentize } from 'polished';
import { theme } from '../../../../theme'
import { SelectMenuItem } from './SelectMenuItem';

afterEach(cleanup);

const content = 'Lorem ipsum'

describe('SelectMenuItem', () => {
  test('should render content', () => {
    const { getByTestId } = render(<SelectMenuItem>{content}</SelectMenuItem>)
    expect(getByTestId('select-menu-item')).toBeInTheDocument();
  })

  test('should apply "selected" styles', () => {
    const { getByTestId } = render(<SelectMenuItem selected>{content}</SelectMenuItem>)
    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should apply "hightlight" styles', () => {
    const { getByTestId } = render(<SelectMenuItem highlight>{content}</SelectMenuItem>)
    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);
  })

  test('should apply "hightlight" and "selected" styles', () => {
    const { getByTestId } = render(<SelectMenuItem selected highlight>{content}</SelectMenuItem>)
    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${theme.palette.primary[200]};
    `);
  })

  test('should not apply "hightlight" nor "selected" styles', () => {
    const { getByTestId } = render(<SelectMenuItem>{content}</SelectMenuItem>)
    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: none;
    `);
  })

  test('should apply "selected" styles on hover', () => {
    const { getByTestId } = render(<SelectMenuItem selected>{content}</SelectMenuItem>)

    fireEvent.mouseOver(getByTestId('select-menu-item'));

    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${theme.palette.primary[100]};
    `);
  })

  test('should apply "highlight" styles on hover', () => {
    const { getByTestId } = render(<SelectMenuItem highlight>{content}</SelectMenuItem>)

    fireEvent.mouseOver(getByTestId('select-menu-item'));

    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${transparentize(0.92, theme.palette.black[900])};
    `);
  })

  test('should apply "hightlight" and "selected" styles on hover', () => {
    const { getByTestId } = render(<SelectMenuItem selected highlight>{content}</SelectMenuItem>)

    fireEvent.mouseOver(getByTestId('select-menu-item'));

    expect(getByTestId('select-menu-item')).toHaveStyle(`
      background: ${theme.palette.primary[200]};
    `);
  })
})
