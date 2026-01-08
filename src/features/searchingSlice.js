import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'india',
}

export const searchingSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { onSearch } = searchingSlice.actions

export default searchingSlice.reducer