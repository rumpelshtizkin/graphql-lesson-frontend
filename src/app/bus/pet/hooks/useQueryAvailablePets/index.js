import {useQuery} from '@apollo/react-hooks'
import {loader} from 'graphql.macro'


const queryAvailablePets = loader('./gql/useQueryAvailablePets.graphql')

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets)
}