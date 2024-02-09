import {useQuery} from '@tanstack/react-query'

import {fetchJokeRandom} from './api'

export const useJokes = () => {
  return useQuery({
    queryKey: ['jokes'],
    queryFn: fetchJokeRandom,
    retry: false,
  })
}
