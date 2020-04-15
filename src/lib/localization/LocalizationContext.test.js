import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { LocalizationContext } from './LocalizationContext';
import defaultLocale from './defaultLocale';

describe('LocalizationContext', () => {
  test('should render default locale', () => {
    const App = () => {
      const { Select } = useContext(LocalizationContext)
      return (
        <LocalizationContext.Provider>
          <div data-testid="translated-term">{Select.noOptionsText}</div>
        </LocalizationContext.Provider>
      )
    }
    const { getByTestId } = render(<App />)
    expect(getByTestId('translated-term')).toHaveTextContent(defaultLocale.Select.noOptionsText)
  })

  test('should render passed locale', () => {
    const customLocale = {
      Select: {
        noOptionsText: 'No item found'
      }
    }
    const { getByTestId } = render(
      <LocalizationContext.Provider value={customLocale}>
        <LocalizationContext.Consumer>
          {(value) => <div data-testid="translated-term">{value.Select.noOptionsText}</div>}
        </LocalizationContext.Consumer>
      </LocalizationContext.Provider>
    )
    expect(getByTestId('translated-term')).toHaveTextContent(customLocale.Select.noOptionsText)
  })
})
