import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
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
