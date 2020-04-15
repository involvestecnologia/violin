import React from 'react'
import { render } from '@testing-library/react';
import Term from './Term'
import { LocalizationContext } from './LocalizationContext'
import defaultLocale from './defaultLocale'

describe('Term', () => {
  test('should render correct term', () => {
    const { getByTestId } = render(<div data-testid="term-container"><Term>Select.noOptionsText</Term></div>)
    expect(getByTestId('term-container')).toHaveTextContent(defaultLocale.Select.noOptionsText)
  })

  test('should render custom term', () => {
    const customLocale = {
      Select: {
        noOptionsText: 'Item not found'
      }
    }
    const Child = () => (
      <div data-testid="term-container">
        <Term>Select.noOptionsText</Term>
      </div>
    )
    const { getByTestId } = render(
      <LocalizationContext.Provider value={customLocale}>
        <LocalizationContext.Consumer>
          {() => <Child />}
        </LocalizationContext.Consumer>
      </LocalizationContext.Provider>
    )
    expect(getByTestId('term-container')).toHaveTextContent(customLocale.Select.noOptionsText)
  })
})
