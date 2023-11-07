import { createSlice } from '@reduxjs/toolkit'

type InitialDataUserState = {
  userName: null
  email: null
  phone: null
}

const initialState: InitialDataUserState = {
  userName: null,
  email: null,
  phone: null
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    SAVE_NAME: (state, action) => ({
      ...state,
      userName: action?.payload
    }),
    SAVE_PHONE: (state, action) => ({
      ...state,
      phone: action?.payload
    }),
    SAVE_EMAIL: (state, action) => ({
      ...state,
      email: action?.payload
    })
  }
})

const { SAVE_EMAIL, SAVE_NAME, SAVE_PHONE } = userDataSlice.actions

export { SAVE_EMAIL, SAVE_NAME, SAVE_PHONE }

const { reducer } = userDataSlice
export default reducer
