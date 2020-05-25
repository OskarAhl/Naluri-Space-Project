import { useState, useEffect } from 'react'

export const useFetch = (initialUrl) => {
    const [res, setRes] = useState({})
    const [url, setUrl] = useState(initialUrl)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const response = await fetch(url)
                const result = await response.json()

                setRes(result)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    return { res, isLoading, isError, doFetch: setUrl }
}
