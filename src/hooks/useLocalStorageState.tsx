import {useState, useEffect, useRef} from 'react'

import {isBrowser} from 'utils/isBrowser'

type useLocalStorageStateType = {
  key: string
  defaultValue?: string | object
}

export function useLocalStorageState(key: string, defaultValue: string | {}) {
  const [state, setState] = useState(() => {
    if (isBrowser()) {
      const valueInLocalStorage = window.localStorage.getItem(key)

      if (valueInLocalStorage) {
        return JSON.parse(valueInLocalStorage)
      }

      return defaultValue
    }
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current

    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }

    prevKeyRef.current = key
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
