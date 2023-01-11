import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    inboxCount: 0,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    inboxCount: (state, action) => {
      state.inboxCount = action.payload;
    },
    sentCount: (state, action) => {
      state.sentCount = action.payload;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage, sentCount, inboxCount } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
