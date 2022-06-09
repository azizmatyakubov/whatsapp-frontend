import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    activeChatId: false,
  },
  reducers: {

    setActiveChatId: (state, action) => {
      return {
        activeChatId: action.payload,
      }
    }

  },
})

export default chatSlice.reducer
export const { setActiveChatId } = chatSlice.actions