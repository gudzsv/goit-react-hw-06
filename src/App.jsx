import { useEffect, useState } from 'react';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import contactsData from './data/contacts.json';

const LS_CONTACTS_KEY = 'initial-contacts';

const initialContacts = () => {
	const localStorageContacts = localStorage.getItem(LS_CONTACTS_KEY);
	return localStorageContacts ? JSON.parse(localStorageContacts) : contactsData;
};

function App() {
	const [contacts, setContacts] = useState(initialContacts);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
	}, [contacts]);

	const handleAddContact = (newContact) => {
		setContacts((prevContacts) => [...prevContacts, newContact]);
	};

	const handleDeleteContact = (id) => {
		setContacts((prevContacts) =>
			prevContacts.filter((contact) => contact.id !== id)
		);
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<h1>Phone book</h1>
			<ContactForm onAdd={handleAddContact} />
			<SearchBox value={filter} onFilter={setFilter} />
			<ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
		</>
	);
}

export default App;
