import NewAnecdote from './components/anecdoteForm'
import Anecdotes from './components/anecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App