import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

export const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})
