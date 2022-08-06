import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: {
        currentTab: 'HOME',
        currentNav: '/'
    }
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        navigation(state, action) {
            state.tab.currentTab = action.payload.tab
            state.tab.currentNav = action.payload.nav
        }
    }
});

export const { navigation } = navSlice.actions;

export default navSlice.reducer;