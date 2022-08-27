import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: {
        message: {
            title: '',
            body: ''
        },
        position: {
            height: '',
            right: ''
        }
    }
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        updateNotification: {
            reducer(state, action) {
                const { message, position } = action.payload;
                state.notification.message = message;
                state.notification.position = position;
            }
        }
    },
});

export const selectNotification = (state) => state.notification.notification;

export const {
    updateNotification
} = notificationSlice.actions;

export default notificationSlice.reducer;