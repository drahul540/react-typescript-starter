import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NavigationState {
    active: String
}

const initialState: NavigationState = {
    active: 'home'
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<String>) => {
            state.active = action.payload
        }
    }
})

export const { setActive } = navigationSlice.actions;