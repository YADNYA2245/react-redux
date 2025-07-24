import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'slice',
  initialState: {
    value: 0
  },
  reducers: {
    add: state => {
      state.value += 1
    },
    remove: state => {
      state.value -= 1
    },
    reset: state => {
      state.value = 0
    }
  }
})
export const { add, remove, reset } = slice.actions

export default slice.reducer