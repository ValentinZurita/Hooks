import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (url) => {

  const localCache = {}


  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })

  useEffect(() => {
    getFetch(url)
  }, [url])

  const setLoadingState = () => {
    setstate({
      ...state,
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const getFetch = async () => {

    if (localCache[url]) {
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return
    }

    setLoadingState()

    const response = await fetch(url)

    //await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!response.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: 'No se pudo cargar la info',
      })
      return
    }

    const data = await response.json()

    setstate({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    localCache[url] = data
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
