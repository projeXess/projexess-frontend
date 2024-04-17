/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    } | null,
    authenticated: boolean;
}

const initialState: UserState = {
    user: null,
    authenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: function (_state, _action) {
            _state.user = _action.payload;
            _state.authenticated = true
            
        },

        logout: function (_state, _action) {
            _state.user = null;
            _state.authenticated = false;
        }

    },
})

export const { login } = userSlice.actions

export default userSlice.reducer