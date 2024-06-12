import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const getFilteredContacts = (contacts, valueOfFilter) =>
	contacts.filter((contact) =>
		contact.name.toLowerCase().includes(valueOfFilter)
	);

const ContactList = () => {
	const contacts = useSelector(selectContacts);
	const valueOfFilter = useSelector(selectNameFilter);
	const filteredContacts = getFilteredContacts(contacts, valueOfFilter);

	return (
		<ul className={styles.contactList}>
			{filteredContacts.map(({ id, number, name }) => (
				<Contact key={id} id={id} number={number} name={name} />
			))}
		</ul>
	);
};

export default ContactList;
