import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteReducer'
import notificationSlice from './reducers/notificationRecuder'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteSlice,
      notification: notificationSlice
    }
  })

  export default store