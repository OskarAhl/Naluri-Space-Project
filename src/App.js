import React, { useState, useEffect } from 'react'
import Layout from './layout'

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

export const BASE_URL = 'http://localhost:3000'

function App() {
    const { res: project, isLoading, isError, doFetch } = useFetch()

    React.useEffect(() => {
        doFetch(`${BASE_URL}/ping`)
    }, [])

    return (
        <Layout>
            <div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </Layout>
    )
}

export default App
