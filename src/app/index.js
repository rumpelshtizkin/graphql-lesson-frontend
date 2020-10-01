// Core
import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'

// Other
import {client} from './init/client'

// Component
import {Pet} from './bus/pet'
import {Customers} from "./bus/Customer";



export const App = () => {

  return (
    <ApolloProvider client={client}>
      <Customers/>
      <Pet/>
    </ApolloProvider>
  )
}
