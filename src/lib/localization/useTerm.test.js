import React from 'react';
import { render } from '@testing-library/react';
import useTerm from './useTerm';
import { LocalizationContext } from './LocalizationContext';
import defaultLocale from './defaultLocale';

describe('useTerm', () => {
  test('should get default term', () => {
    const App = () => (
      <LocalizationContext.Provider>
        <div data-testid="translated-term">{useTerm('Select.noOptionsText')}</div>
      </LocalizationContext.Provider>
    )
    const { getByTestId } = render(<App />)
    expect(getByTestId('translated-term')).toHaveTextContent(defaultLocale.Select.noOptionsText)
  })

  test('should get custom term', () => {
    const customLocale = {
      Select: {
        noOptionsText: 'No item found'
      }
    }
    const App = () => {
      const Child = () => <div data-testid="translated-term">{useTerm('Select.noOptionsText')}</div>
      return (
        <LocalizationContext.Provider value={customLocale}>
          <LocalizationContext.Consumer>
            {() => <Child />}
          </LocalizationContext.Consumer>
        </LocalizationContext.Provider>
      )
    }
    const { getByTestId } = render(<App />)
    expect(getByTestId('translated-term')).toHaveTextContent(customLocale.Select.noOptionsText)
  })
})
