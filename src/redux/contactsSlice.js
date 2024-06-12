import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
	},

	reducers: {
		addContact: {
			reducer(state, action) {
				state.items.push(action.payload);
			},
			prepare({ name, number }) {
				return {
					payload: {
						id: nanoid(),
						name,
						number,
					},
				};
			},
		},
		deleteContact(state, action) {
			console.log('action: ', action);
			console.log('state: ', state);
			const index = state.items.findIndex((item) => item.id === action.payload);
			state.items.splice(index, 1);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (store) => store.contacts.items;
