import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import Router from './navigation/Router'
import { AuthProvider } from './contexts/AuthContext'
import { PinProvider } from './contexts/PinMessagesContext'

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
})

function App () {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <AuthProvider>
          <PinProvider>
            <Router />
          </PinProvider>
        </AuthProvider>
      </div>
    </ApolloProvider>
  )
}

export default App
