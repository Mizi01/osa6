import NewAnecdote from './components/anecdoteForm'
import Anecdotes from './components/anecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App