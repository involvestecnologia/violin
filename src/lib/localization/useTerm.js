import { useContext } from 'react'
import { LocalizationContext } from './LocalizationContext'

const useTerm = (key) => {
  const localeContext = useContext(LocalizationContext)
  const term = key.split('.').reduce((_, x) => _[x], localeContext);
  return term
}

export default useTerm
