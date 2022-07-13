import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, deleteNotification } from '../reducers/notificationRecuder'

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    console.log(anecdotes)

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        
        dispatch(createNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(deleteNotification())
        }, 5000)
        dispatch(voteAnecdote(anecdote.id))
      }

      const test2 = [...anecdotes]
    
      const sortByVote = test2.sort((eka, toka) => (eka.votes > toka.votes) ? -1 : 1)
      console.log(sortByVote)

    return(
        <>
        {sortByVote.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
          </>
    )
}

export default Anecdotes