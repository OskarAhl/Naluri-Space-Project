# 🚀 Node PI calculator

Nodejs server that generates PI digits on a child process with the [Spigot algorithm](https://en.wikipedia.org/wiki/Spigot_algorithm).

React app bootstrapped with [Create React App](https://github.com/facebook/create-react-app) + [Emotion](https://emotion.sh/docs/introduction) + [Chakra UI](https://chakra-ui.com/)

## Setup

**Install:**

```
yarn install
```

**Start:**

```
// client:
yarn run start-client

// server:
yarn run start-server
```

**Tests:**

```
yarn run test
```

## TODOs:

-   Environment variables (e.g. for server url)

**Client**

-   Add polling

**Server**

-   Add logging
-   Add monitoring (e.g. of PI calculation and memory usage)
-   Add rate limiting
-   Store latest PI in database

## Long-term TODOS:

-   Move PI generation to separate service in something fast like C
