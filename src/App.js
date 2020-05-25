import React from 'react'
import styled from '@emotion/styled'
import { Heading, Stack, Text } from '@chakra-ui/core'
import { Decimal } from 'decimal.js'
import { useFetch } from './use-fetch'
import { COLORS } from './colors'
import Layout from './layout'

const Block = styled.div`
    background-color: ${COLORS.BLACK};
    padding: 8px;
    border-radius: 6px;
    word-wrap: break-word;
`

const BASE_URL = 'http://localhost:3000'
const DIAMETER_OF_SUN_MILLION_KM = 1.3927

function App() {
    const [sunCircumference, setSunCircumference] = React.useState()
    const { res, isLoading, isError, doFetch } = useFetch()

    React.useEffect(() => {
        doFetch(`${BASE_URL}/pi`)
    }, [doFetch])

    React.useEffect(() => {
        if (res.PI) {
            const newSunCircumference = new Decimal(res.PI).times(DIAMETER_OF_SUN_MILLION_KM).toString()
            setSunCircumference(newSunCircumference)
        }
    }, [res])

    // TODO: move inside <Layout />
    if (isLoading) return <Text>Loading...</Text>

    // TODO: move inside <Layout />
    if (isError)
        return (
            <Text>
                Something went wrong - please refresh
                <span aria-label="space" role="img">
                    ⚠️
                </span>
            </Text>
        )

    return (
        <Layout>
            <Stack spacing={8}>
                <Stack>
                    <Heading as="h2" size="lg">
                        Pi:
                    </Heading>
                    <Block>
                        <Text color={COLORS.NEON}>{res.PI}</Text>
                    </Block>
                </Stack>
                <Stack>
                    <Heading as="h2" size="lg">
                        Sun circumference: (million km)
                    </Heading>
                    <Block>
                        <Text color={COLORS.PINK}>{sunCircumference}</Text>
                    </Block>
                </Stack>
            </Stack>
        </Layout>
    )
}

export default App
