import React, {
  Children,
  forwardRef,
  // useCallback,
  // useEffect,
  // useState,
} from 'react'
import { ListItem } from '../ListItem'

// const R = require('ramda')

export const withArrowNavigation = (List) => forwardRef(({ children, ...props }, ref) => {
  // debugger
  console.log('hi')
  // const [first, setFirst] = useState(null)
  // const [last, setLast] = useState(null)
  // const [current, setCurrent] = useState(null)
  // const [selectableItems, setSelectableItems] = useState(null)
  // const [reversedSelectableItems, setReversedSelectableItems] = useState(null)
  // const [iterable, setIterable] = useState(null)
  // const [reversedIterable, setReversedIterable] = useState(null)
  // const [select, setSelect] = useState(null)
  // const [ready, setReady] = useState(false)

  // const up = () => {
  // }

  // const down = () => {
  // }

  // const handler = (event) => {
  //   if (event.keyCode === 40) {
  //     const { value, done } = iterable.next()
  //     if (done) {
  //       setSelect(first)
  //       setIterable(selectableItems.values())
  //     } else {
  //       setSelect(value)
  //     }
  //   } else if (event.keyCode === 38) {
  //     const { value, done } = iterable.next()
  //     if (done) {
  //       setSelect(last)
  //       setIterable(reversedSelectableItems.values())
  //     } else {
  //       setSelect(value)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   let mounted = true

  //   if (mounted && select) {
  //     setCurrent(select)
  //   }

  //   return () => {
  //     mounted = false
  //   }
  // }, [select])

  // useEffect(() => {
  //   let mounted = true

  //   if (mounted && children && children.length > 0) {
  //     const selectableChildren = Children
  //       .map(children, (child, index) => ({ child, index }))
  //       .filter(({ child }) => child.type.name === ListItem.name)
  //       .map(({ index }) => index)

  //     const map = new Map()
  //     const reversedMap = new Map()
  //     selectableChildren.forEach((selectableChild, index) => {
  //       map.set(index, selectableChild)
  //     })

  //     selectableChildren.reverse().forEach((selectableChild, index) => {
  //       reversedMap.set(index, selectableChild)
  //     })

  //     setFirst(map.get(0))
  //     setLast(map.get(map.size - 1))
  //     setSelectableItems(map)
  //     setIterable(map.values())
  //     setReversedIterable(reversedMap.values())
  //     setReady(true)
  //   }

  //   return () => {
  //     mounted = false
  //   }
  // }, [children])

  // const listRef = useCallback((node) => {
  //   let mounted = true
  //   if (mounted && node && ready) {
  //     node.addEventListener('keydown', handler)
  //   }

  //   return () => {
  //     node.removeEventListener('keydown', handler);
  //     mounted = false
  //   };
  // }, [ready])

  return (
    <List {...props} ref={ref}>
      {Children.map(children, (child) => React.cloneElement(child, {
        ...child.props,
        selectable: child.type.name === ListItem.name,
        // selected: index === current,
      }))}
    </List>
  )
})
