import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import FormSlice from './reducers/FormSlice'
import AuthSlice from './reducers/AuthSlice'
import ClientSlice from './reducers/ClientSlice'
import TaskSlice from './reducers/TaskSlice'

export const store = configureStore({
  reducer: {
    forms: FormSlice,
    auth: AuthSlice,
    client: ClientSlice,
    tasks: TaskSlice
  },
},composeWithDevTools())

export default store