import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
  numOfIcecreams: 15
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },
  // To afect the state with an Action from other slice (cakeOrdered comes from the cakeSlice)
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
        if (state.numOfIcecreams>0) {
            state.numOfIcecreams--
        }
    })
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions