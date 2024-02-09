import './App.css'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import Jokes from './Views/Jokes'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Jokes />
    </QueryClientProvider>
  )
}

export default App
